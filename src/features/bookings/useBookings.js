import { useQuery } from '@tanstack/react-query';
import { getBookings } from '../../services/apiBookings';
import { useSearchParams } from 'react-router-dom';

export function useBookings() {
	const [searchParams] = useSearchParams();

	// 1. Filter
	const filterValue = searchParams.get('status');
	let filter =
		!filterValue || filterValue === 'all'
			? null
			: { field: 'status', value: filterValue, method: 'eq' };

	// 2. Sort
	const sortValue = searchParams.get('sortBy') || 'startDate-desc';
	const [field, direction] = sortValue.split('-');
	const sortBy = { field, direction };

	const {
		isLoading,
		data: bookings,
		error,
	} = useQuery({
		queryKey: ['bookings', filter, sortBy],
		queryFn: () => getBookings({ filter, sortBy }),
	});

	return { isLoading, bookings, error };
}
