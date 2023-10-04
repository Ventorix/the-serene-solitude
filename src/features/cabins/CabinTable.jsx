import { useCabins } from './useCabins';

import Spinner from '../../ui/Spinner';
import CabinRow from './CabinRow';
import Table from '../../ui/Table';

function CabinTable() {
	const { isLoading, cabins } = useCabins();

	const defaultColumns = '1fr 1.8fr 2.2fr 1fr 1fr 1fr';

	if (isLoading) return <Spinner />;

	return (
		<Table columns={defaultColumns}>
			<Table.Header>
				<div>Image</div>
				<div>Cabin</div>
				<div>Capacity</div>
				<div>Price</div>
				<div>Discount</div>
				<div>Actions</div>
			</Table.Header>

			<Table.Body data={cabins} render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />} />
		</Table>
	);
}

export default CabinTable;
