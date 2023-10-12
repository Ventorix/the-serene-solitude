import DashboardLayout from '../features/dashboard/DashboardLayout';
import DashboardFilterRow from '../features/dashboard/DashboardFilterRow';

function Dashboard() {
	return (
		<>
			<DashboardFilterRow />
			<DashboardLayout />
		</>
	);
}

export default Dashboard;
