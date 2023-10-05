import { useCabins } from './useCabins';
import { useSearchParams } from 'react-router-dom';

import Spinner from '../../ui/Spinner';
import CabinRow from './CabinRow';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';

function CabinTable() {
	const { isLoading, cabins } = useCabins();
	const [searchParams] = useSearchParams();

	const defaultColumns = '1fr 1.8fr 2.2fr 1fr 1fr 1fr';

	if (isLoading) return <Spinner />;

	// 1. Filter
	const filterValue = searchParams.get('discount') || 'all';
	let filteredCabins;

	switch (filterValue) {
		case 'all':
			filteredCabins = cabins;
			break;
		case 'no-discount':
			filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
			break;
		case 'with-discount':
			filteredCabins = cabins.filter((cabin) => cabin.discount > 0);
			break;
	}

	//2. Sort
	const arrOfStringFields = ['name'];
	const sortBy = searchParams.get('sortBy') || 'name-asc';
	let sortedCabins;

	const [field, direction] = sortBy.split('-');

	// Check whether a field should be sorted with localeCompare or without
	const isSortString = arrOfStringFields.includes(field);

	// Check whether a sort should be in ascending or descending order
	const modifier = direction === 'asc' ? 1 : -1;

	if (isSortString)
		sortedCabins = filteredCabins.sort(
			(sortedCabins = (a, b) =>
				(a[field] || '').toString().localeCompare((b[field] || '').toString()) * modifier),
		);
	else sortedCabins = filteredCabins.sort((a, b) => (a[field] - b[field]) * modifier);

	return (
		<Menus>
			<Table columns={defaultColumns}>
				<Table.Header>
					<div>Image</div>
					<div>Cabin</div>
					<div>Capacity</div>
					<div>Price</div>
					<div>Discount</div>
					<div>Actions</div>
				</Table.Header>

				<Table.Body
					data={sortedCabins}
					render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
				/>
			</Table>
		</Menus>
	);
}

export default CabinTable;
