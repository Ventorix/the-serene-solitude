import styled from 'styled-components';

import ButtonIcon from '../ButtonIcon';

import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2';
import { useSidebar } from '../../context/SidebarContext';

const StyledToggler = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: auto;
`;

function Toggler() {
	const { isOpen, toggleSidebarCollapse } = useSidebar();

	return (
		<StyledToggler>
			<ButtonIcon
				title={isOpen ? 'Collapse' : 'Open'}
				onClick={() => toggleSidebarCollapse((open) => !open)}
				aria-label='Menu Toggler'>
				{isOpen ? <HiArrowLeft /> : <HiArrowRight />}
			</ButtonIcon>
		</StyledToggler>
	);
}

export default Toggler;
