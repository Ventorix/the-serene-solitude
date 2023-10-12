import { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import GlobalStyles from './styles/GlobalStyles';

const AppLayout = lazy(() => import('./ui/AppLayout'));
const ProtectedRoute = lazy(() => import('./ui/ProtectedRoute'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Bookings = lazy(() => import('./pages/Bookings'));
const Booking = lazy(() => import('./pages/Booking'));
const CheckIn = lazy(() => import('./pages/CheckIn'));
const Cabins = lazy(() => import('./pages/Cabins'));
const Settings = lazy(() => import('./pages/Settings'));
const Users = lazy(() => import('./pages/Users'));
const Account = lazy(() => import('./pages/Account'));
const Login = lazy(() => import('./pages/Login'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));

import { Toaster } from 'react-hot-toast';
import DarkModeProvider from './context/DarkModeContext';
import FullPageSpinner from './ui/FullPageSpinner';
import SidebarProvider from './context/SidebarContext';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 60 * 1000,
		},
	},
});

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />

			<GlobalStyles />
			<BrowserRouter>
				<DarkModeProvider>
					<Suspense fallback={<FullPageSpinner />}>
						<Routes>
							<Route
								element={
									<ProtectedRoute>
										<SidebarProvider>
											<AppLayout />
										</SidebarProvider>
									</ProtectedRoute>
								}>
								<Route index element={<Navigate replace to='dashboard' />} />
								<Route path='dashboard' element={<Dashboard />} />
								<Route path='bookings' element={<Bookings />} />
								<Route path='bookings/:bookingId' element={<Booking />} />
								<Route path='checkin/:bookingId' element={<CheckIn />} />
								<Route path='cabins' element={<Cabins />} />
								<Route path='users' element={<Users />} />
								<Route path='settings' element={<Settings />} />
								<Route path='account' element={<Account />} />
							</Route>

							<Route path='login' element={<Login />} />
							<Route path='*' element={<PageNotFound />} />
						</Routes>
					</Suspense>
				</DarkModeProvider>
			</BrowserRouter>

			<Toaster
				position='top-center'
				gutter={12}
				containerStyle={{
					margin: '8px',
				}}
				toastOptions={{
					success: {
						duration: 3000,
					},
					error: {
						duration: 3000,
					},
					style: {
						fontSize: '16px',
						maxWidth: '500px',
						padding: '16px 24px',
						backgroundColor: 'var(--color-grey-0)',
						color: 'var(--color-grey-700)',
					},
				}}
			/>
		</QueryClientProvider>
	);
}

export default App;
