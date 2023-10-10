import styled from 'styled-components';
import Spinner from '../../ui/Spinner';

import { useResentBookings } from './useRecentBookings';
import { useResentStays } from './useRecentStays';

const StyledDashboardLayout = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: auto 34rem auto;
	gap: 2.4rem;
`;

function DashboardLayout() {
	const { isLoading, bookings } = useResentBookings();
	const { isLoading: isStaing, stays, confirmedStays } = useResentStays();

	if (isLoading || isStaing) return <Spinner />;

	console.log(bookings);
	return (
		<StyledDashboardLayout>
			<div>Statistics</div>
			<div>Today`s activity</div>
			<div>Chart stay duration</div>
			<div>Chart of sales</div>
		</StyledDashboardLayout>
	);
}

export default DashboardLayout;
