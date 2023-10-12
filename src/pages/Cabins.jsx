import CabinTable from '../features/cabins/CabinTable';
import AddCabin from '../features/cabins/AddCabin';
import Row from '../ui/Row';
import CabinFilterRow from '../features/cabins/CabinFilterRow';

function Cabins() {
	return (
		<>
			<CabinFilterRow />

			<Row>
				<CabinTable />
				<AddCabin />
			</Row>
		</>
	);
}

export default Cabins;
