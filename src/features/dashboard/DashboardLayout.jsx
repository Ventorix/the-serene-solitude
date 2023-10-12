import styled from 'styled-components';
import { media } from '../../styles/breakpoints';

import { useResentBookings } from './useRecentBookings';
import { useResentStays } from './useRecentStays';
import { useCabins } from '../cabins/useCabins';

import Spinner from '../../ui/Spinner';
import Stats from './Stats';
import SalesChart from './SalesChart';
import DurationChart from './DurationChart';
import TodayActivity from '../check-in-out/TodayActivity';

const StyledDashboardLayout = styled.div`
	display: grid;
	grid-auto-columns: 1fr;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: 0.5fr 1.2fr 1.3fr;
	gap: 2.4rem;
	grid-template-areas:
		'Stats Stats Stats Stats'
		'Activities Activities PieChart PieChart'
		'SalesChart SalesChart SalesChart SalesChart';

	${media.tb`
	grid-template-rows: 0.5fr 1.6fr 0.9fr 1.2fr;
	grid-template-columns: 1fr 1fr;
	grid-template-areas:
		'Stats Stats'
		'Activities Activities'
		'PieChart PieChart'
		'SalesChart SalesChart';
	`}
`;

function DashboardLayout() {
	const { isLoading, bookings } = useResentBookings();
	const { isLoading: isStaing, confirmedStays, numDays } = useResentStays();
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
			<TodayActivity />
			<DurationChart confirmedStays={confirmedStays} />
			<SalesChart bookings={bookings} numDays={numDays} />
		</StyledDashboardLayout>
	);
}

export default DashboardLayout;
