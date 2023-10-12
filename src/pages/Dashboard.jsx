import DashboardLayout from '../features/dashboard/DashboardLayout';
import FilterRow from '../features/dashboard/FilterRow';

function Dashboard() {
	return (
		<>
			<FilterRow />
			<DashboardLayout />
		</>
	);
}

export default Dashboard;
