import {
	HiOutlineBanknotes,
	HiOutlineBriefcase,
	HiOutlineCalendarDays,
	HiOutlineChartBar,
} from 'react-icons/hi2';
import Stat from './Stat';
import { formatCurrency } from '../../utils/helpers';
import styled from 'styled-components';
import { media } from '../../styles/breakpoints';

const StyledStats = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr;
	gap: 2.4rem;
	grid-template-areas: 'Stat1 Stat2 Stat3 Stat4';
	grid-area: Stats;

	${media.lg`
	grid-template-columns: 1fr 1fr;
	grid-template-areas:
	'Stat1 Stat2'
	'Stat3 Stat4';
	`}

	${media.xxs`

	`}
`;

function Stats({ bookings = [], confirmedStays = [], numDays = 0, cabinCount = 0, isLoading }) {
	const numBookings = bookings.length;

	const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

	const checkIns = confirmedStays.length;

	const occupation =
		confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) / (numDays * cabinCount);

	return (
		<StyledStats>
			<Stat
				title={'Bookings'}
				color='blue'
				icon={<HiOutlineBriefcase />}
				value={numBookings}
				stat={1}
				isLoading={isLoading}
			/>
			<Stat
				title={'Sales'}
				color='green'
				icon={<HiOutlineBanknotes />}
				value={formatCurrency(sales)}
				stat={2}
				isLoading={isLoading}
			/>
			<Stat
				title={'Check ins'}
				color='indigo'
				icon={<HiOutlineCalendarDays />}
				value={checkIns}
				stat={3}
				isLoading={isLoading}
			/>
			<Stat
				title={'Occupancy rate'}
				color='yellow'
				icon={<HiOutlineChartBar />}
				value={Math.round(occupation * 100) + '%'}
				stat={4}
				isLoading={isLoading}
			/>
		</StyledStats>
	);
}

export default Stats;
