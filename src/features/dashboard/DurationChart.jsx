import { useCallback, useState } from 'react';

import styled from 'styled-components';
import { media } from '../../styles/breakpoints';
import Skeleton from 'react-loading-skeleton';

import Heading from '../../ui/Heading';

import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Sector, Tooltip } from 'recharts';
import { useDarkMode } from '../../context/DarkModeContext';

const ChartBox = styled.div`
	/* Box */
	background-color: var(--color-grey-0);
	border: 1px solid var(--color-grey-100);
	border-radius: var(--border-radius-md);
	padding: 2.4rem 3.2rem;
	grid-area: PieChart;

	& > *:first-child {
		margin-bottom: 1.6rem;
	}

	& .recharts-pie-label-text {
		font-weight: 600;
	}

	& .recharts-wrapper > svg > g > g {
		outline: none !important;
	}

	.recharts-default-legend > li {
		margin-right: 0 !important;
	}

	${media.lg`
	.recharts-default-legend {
		display: flex;
		flex-direction: column;
		gap: 5px;
		margin-left:15px !important;
	}
	`}

	${media.tb`
	.recharts-default-legend > li > span {
			font-size: 1.3rem;
		}
	`}

	${media.xs`
	.recharts-default-legend > li > span {
			font-size: 1.1rem;
		}
	`}

	${media.xxs`
	.recharts-default-legend {
		gap: 0;
	}
	.recharts-default-legend > li > span {
			font-size: 0.9rem;
		}
	.recharts-legend-item > svg {
		height: 6px;
		width: 6px;
	}
	`}
`;

const ChartLoaderBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

const LegendLoaderBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const DurationChartLoader = () => {
	return (
		<ChartLoaderBox>
			<Skeleton height='200px' width='200px' circle />

			<LegendLoaderBox>
				<Skeleton height='18px' width='108px' borderRadius={'12px'} />
				<Skeleton height='18px' width='108px' borderRadius={'12px'} />
				<Skeleton height='18px' width='108px' borderRadius={'12px'} />
				<Skeleton height='18px' width='108px' borderRadius={'12px'} />
			</LegendLoaderBox>
		</ChartLoaderBox>
	);
};

const startDataLight = [
	{
		duration: '1 night',
		value: 0,
		color: '#ef4444',
	},
	{
		duration: '2 nights',
		value: 0,
		color: '#f97316',
	},
	{
		duration: '3 nights',
		value: 0,
		color: '#eab308',
	},
	{
		duration: '4-5 nights',
		value: 0,
		color: '#84cc16',
	},
	{
		duration: '6-7 nights',
		value: 0,
		color: '#22c55e',
	},
	{
		duration: '8-14 nights',
		value: 0,
		color: '#14b8a6',
	},
	{
		duration: '15-21 nights',
		value: 0,
		color: '#3b82f6',
	},
	{
		duration: '21+ nights',
		value: 0,
		color: '#a855f7',
	},
];

const startDataDark = [
	{
		duration: '1 night',
		value: 0,
		color: '#b91c1c',
	},
	{
		duration: '2 nights',
		value: 0,
		color: '#c2410c',
	},
	{
		duration: '3 nights',
		value: 0,
		color: '#a16207',
	},
	{
		duration: '4-5 nights',
		value: 0,
		color: '#4d7c0f',
	},
	{
		duration: '6-7 nights',
		value: 0,
		color: '#15803d',
	},
	{
		duration: '8-14 nights',
		value: 0,
		color: '#0f766e',
	},
	{
		duration: '15-21 nights',
		value: 0,
		color: '#1d4ed8',
	},
	{
		duration: '21+ nights',
		value: 0,
		color: '#7e22ce',
	},
];

function prepareData(startData, stays) {
	// A bit ugly code, but sometimes this is what it takes when working with real data 😅

	function incArrayValue(arr, field) {
		return arr.map((obj) => (obj.duration === field ? { ...obj, value: obj.value + 1 } : obj));
	}

	const data = stays
		.reduce((arr, cur) => {
			const num = cur.numNights;
			if (num === 1) return incArrayValue(arr, '1 night');
			if (num === 2) return incArrayValue(arr, '2 nights');
			if (num === 3) return incArrayValue(arr, '3 nights');
			if ([4, 5].includes(num)) return incArrayValue(arr, '4-5 nights');
			if ([6, 7].includes(num)) return incArrayValue(arr, '6-7 nights');
			if (num >= 8 && num <= 14) return incArrayValue(arr, '8-14 nights');
			if (num >= 15 && num <= 21) return incArrayValue(arr, '15-21 nights');
			if (num >= 21) return incArrayValue(arr, '21+ nights');
			return arr;
		}, startData)
		.filter((obj) => obj.value > 0);

	return data;
}

function CustomTooltip({ active, payload, totalValue, label, style }) {
	if (active) {
		const percent = Math.round((payload[0].value / totalValue) * 100);

		return (
			<div
				className='custom-tooltip'
				style={{
					padding: '5px',
					borderRadius: '6px',
					...style,
				}}>
				<label>{`${payload[0].name} : ${payload[0].value} (${percent}%)`}</label>
			</div>
		);
	}
	return null;
}

const renderActiveShape = (props) => {
	const RADIAN = Math.PI / 180;

	const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, style } = props;

	const sin = Math.sin(-RADIAN * midAngle);
	const cos = Math.cos(-RADIAN * midAngle);
	const sx = cx + (outerRadius / 7) * cos;
	const sy = cy + (outerRadius / 7) * sin;

	return (
		<g>
			<Sector
				cx={sx}
				cy={sy}
				innerRadius={innerRadius}
				outerRadius={outerRadius}
				startAngle={startAngle}
				endAngle={endAngle}
				fill={fill}
				style={{ ...style }}
			/>
		</g>
	);
};

function DurationChart({ confirmedStays = [], isLoading }) {
	const [activeIndex, setActiveIndex] = useState(-1);

	const { isDarkMode } = useDarkMode();

	const startData = isDarkMode ? startDataDark : startDataLight;

	const data = prepareData(startData, confirmedStays);

	const totalValue = data.reduce((acc, cur) => acc + cur.value, 0);

	const colors = isDarkMode
		? {
				text: '#e5e7eb',
				background: '#18212f',
		  }
		: {
				text: '#374151',
				background: '#fff',
		  };

	const onPieEnter = useCallback((_, index) => setActiveIndex(index), []);

	const onPieLeave = useCallback(() => setActiveIndex(null), []);

	return (
		<ChartBox>
			<Heading as='h2'>Stay duration summary</Heading>

			{isLoading ? (
				<DurationChartLoader />
			) : (
				<ResponsiveContainer width={'100%'} height={240}>
					<PieChart>
						<Pie
							data={data}
							nameKey={'duration'}
							dataKey={'value'}
							activeIndex={activeIndex}
							activeShape={renderActiveShape}
							animationDuration={3000}
							innerRadius='75%'
							outerRadius='95%'
							cx={'50%'}
							cy={'50%'}
							paddingAngle={3}
							onMouseEnter={onPieEnter}
							onMouseLeave={onPieLeave}>
							{data.map((entry, index) => (
								<Cell
									fill={entry.color}
									stroke={entry.color}
									key={entry.color}
									style={{
										filter: `drop-shadow(0px 0px 5px ${
											startData.at((index + 1) % startData.length).color
										}`,
									}}
								/>
							))}
						</Pie>
						<Tooltip
							content={
								<CustomTooltip
									totalValue={totalValue}
									style={{
										backgroundColor: colors.background,
										color: colors.text,
										border: `2px solid ${colors.text}`,
									}}
								/>
							}
						/>
						<Legend
							verticalAlign='middle'
							align='right'
							width='40%'
							layout='vertical'
							iconSize={10}
							iconType='circle'
						/>
					</PieChart>
				</ResponsiveContainer>
			)}
		</ChartBox>
	);
}

export default DurationChart;
