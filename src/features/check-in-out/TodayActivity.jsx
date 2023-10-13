import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';

import Heading from '../../ui/Heading';
import Row from '../../ui/Row';
import TodayItem from './TodayItem';

import { useTodayActivity } from './useTodayActivity';

const StyledToday = styled.div`
	/* Box */
	background-color: var(--color-grey-0);
	border: 1px solid var(--color-grey-100);
	border-radius: var(--border-radius-md);
	grid-area: Activities;

	padding: 3.2rem;
	display: flex;
	flex-direction: column;
	gap: 2.4rem;
	padding-top: 2.4rem;
`;

const TodayList = styled.ul`
	overflow: scroll;
	overflow-x: hidden;

	/* Removing scrollbars for webkit, firefox, and ms, respectively */
	&::-webkit-scrollbar {
		width: 0 !important;
	}
	scrollbar-width: none;
	-ms-overflow-style: none;
`;

const NoActivity = styled.p`
	text-align: center;
	font-size: 1.8rem;
	font-weight: 500;
	margin-top: 0.8rem;
`;

function TodayActivity() {
	const { isLoading, activities } = useTodayActivity();

	return (
		<StyledToday>
			<Row type='horizontal'>
				<Heading as='h2'>Today</Heading>
			</Row>

			{!isLoading ? (
				activities?.length > 0 ? (
					<TodayList>
						{activities.map((activity) => (
							<TodayItem activity={activity} key={activity.id} />
						))}
					</TodayList>
				) : (
					<NoActivity>No activity today...</NoActivity>
				)
			) : (
				<>
					<Skeleton count={5} height='46px' width='100%' borderRadius={'12px'} />
				</>
			)}
		</StyledToday>
	);
}

export default TodayActivity;
