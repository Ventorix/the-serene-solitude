import styled from 'styled-components';
import Logo from './Logo';
import MainNav from './MainNav';
import Toggler from './Toggler';
import { useSidebar } from '../../context/SidebarContext';
import { media } from '../../styles/breakpoints';

const StyledSidebar = styled.aside`
	background-color: var(--color-grey-0);
	padding: 3.2rem 2.4rem;
	border-right: 1px solid var(--color-grey-100);
	grid-row: 1/-1;

	display: flex;
	flex-direction: column;
	gap: 3.2rem;

	${media.sm`
	padding: 0;
	`}
`;

function Sidebar() {
	const { isOpen } = useSidebar();

	return (
		<StyledSidebar>
			<Toggler />

			{isOpen && <Logo />}
			<MainNav />
		</StyledSidebar>
	);
}

export default Sidebar;
