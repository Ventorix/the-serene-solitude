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

	// 3. Pagination
	const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));

	const {
		isLoading,
		data: { data: bookings, count } = {},
		error,
	} = useQuery({
		queryKey: ['bookings', filter, sortBy, page],
		queryFn: () => getBookings({ filter, sortBy, page }),
	});

	return { isLoading, bookings, error, count };
}
