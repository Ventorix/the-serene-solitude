import { useCabins } from './useCabins';

import Spinner from '../../ui/Spinner';
import CabinRow from './CabinRow';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';

function CabinTable() {
	const { isLoading, cabins } = useCabins();

	const defaultColumns = '1fr 1.8fr 2.2fr 1fr 1fr 1fr';

	if (isLoading) return <Spinner />;

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

				<Table.Body data={cabins} render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />} />
			</Table>
		</Menus>
	);
}

export default CabinTable;
