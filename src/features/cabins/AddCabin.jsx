import styled from 'styled-components';

import Button from '../../ui/Button';
import CreateCabinForm from './CreateCabinForm';
import Modal from '../../ui/Modal';

const Footer = styled.footer`
	display: flex;
	justify-content: center;
`;

function AddCabin() {
	return (
		<Footer>
			<Modal>
				<Modal.Open opens='cabin-form'>
					<Button>Create new cabin</Button>
				</Modal.Open>
				<Modal.Window name='cabin-form'>
					<CreateCabinForm />
				</Modal.Window>
			</Modal>
		</Footer>
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
