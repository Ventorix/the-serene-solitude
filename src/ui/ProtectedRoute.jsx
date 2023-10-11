import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../features/authentication/useUser';
import FullPageSpinner from './FullPageSpinner';

function ProtectedRoute({ children }) {
	const navigate = useNavigate();

	// 1. Load authenticated user
	const { isLoading, isAuthenticated } = useUser();

	// 2. If there is NO authenticated user then redirect to the /login page
	useEffect(() => {
		if (!isAuthenticated && !isLoading) navigate('/login');
	}, [isAuthenticated, isLoading, navigate]);

	// 3. While loading show a spinner
	if (isLoading) return <FullPageSpinner />;

	// 4. If there IS a user then render the app
	if (isAuthenticated) return children;
}

export default ProtectedRoute;
