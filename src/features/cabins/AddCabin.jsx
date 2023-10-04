import Button from '../../ui/Button';
import CreateCabinForm from './CreateCabinForm';
import Modal from '../../ui/Modal';

function AddCabin() {
	return (
		<Modal>
			<Modal.Open opens='cabin-form'>
				<Button>Add new cabin</Button>
			</Modal.Open>
			<Modal.Window name='cabin-form'>
				<CreateCabinForm />
			</Modal.Window>
		</Modal>
	);
}

// function AddCabin() {
// 	const [isOpenModal, setIsOpenModal] = useState(false);

// 	function handleOpen() {
// 		setIsOpenModal((isOpen) => !isOpen);
// 	}

// 	return (
// 		<>
// 			<Button onClick={handleOpen}>Add new cabin</Button>

// 			{isOpenModal && (
// 				<Modal onCloseModal={handleOpen}>
// 					<CreateCabinForm onCloseModal={handleOpen} />
// 				</Modal>
// 			)}
// 		</>
// 	);
// }

export default AddCabin;
