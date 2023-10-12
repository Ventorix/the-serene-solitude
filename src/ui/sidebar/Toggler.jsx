import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2';
import ButtonIcon from '../ButtonIcon';
import { useSidebar } from '../../context/SidebarContext';
import { media } from '../../styles/breakpoints';
import styled from 'styled-components';

const StyledToggler = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	${media.tb`
	display: none;
	`}
`;

function Toggler() {
	const { isOpen, toggleSidebarCollapse } = useSidebar();

	return (
		<StyledToggler>
			<ButtonIcon onClick={() => toggleSidebarCollapse((open) => !open)}>
				{isOpen ? <HiArrowLeft /> : <HiArrowRight />}
			</ButtonIcon>
		</StyledToggler>
	);
}

export default Toggler;
