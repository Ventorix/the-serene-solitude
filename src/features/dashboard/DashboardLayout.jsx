import styled from 'styled-components';
import Spinner from '../../ui/Spinner';

import { useResentBookings } from './useRecentBookings';
import { useResentStays } from './useRecentStays';
import Stats from './Stats';
import { useCabins } from '../cabins/useCabins';
import SalesChart from './SalesChart';
import DurationChart from './DurationChart';

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

	return (
		<StyledDashboardLayout>
			<Stats
				bookings={bookings}
				confirmedStays={confirmedStays}
				numDays={numDays}
				cabinCount={cabins.length}
			/>
			<div>Today`s activity</div>
			<DurationChart confirmedStays={confirmedStays} />
			<SalesChart bookings={bookings} numDays={numDays} />
		</StyledDashboardLayout>
	);
}

export default DashboardLayout;
