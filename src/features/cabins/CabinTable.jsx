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

	let filteredCabins;

	if (isLoading) return <Spinner />;

	const filterValue = searchParams.get('discount') || 'all';

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
					data={filteredCabins}
					render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
				/>
			</Table>
		</Menus>
	);
}

export default CabinTable;
