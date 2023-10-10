import styled from 'styled-components';
import Spinner from '../../ui/Spinner';

import { useResentBookings } from './useRecentBookings';
import { useResentStays } from './useRecentStays';
import Stats from './Stats';
import { useCabins } from '../cabins/useCabins';

const StyledDashboardLayout = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: auto 34rem auto;
	gap: 2.4rem;
`;

function DashboardLayout() {
	const { isLoading, bookings } = useResentBookings();
	const { isLoading: isStaing, stays, confirmedStays, numDays } = useResentStays();
	const { cabins, isLoading: isLoadingCabins } = useCabins();

	if (isLoading || isStaing || isLoadingCabins) return <Spinner />;

	console.log(bookings);
	return (
		<StyledDashboardLayout>
			<Stats
				bookings={bookings}
				confirmedStays={confirmedStays}
				numDays={numDays}
				cabinCount={cabins.length}
			/>
			<div>Today`s activity</div>
			<div>Chart stay duration</div>
			<div>Chart of sales</div>
		</StyledDashboardLayout>
	);
}

export default DashboardLayout;
