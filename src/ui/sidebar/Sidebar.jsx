import styled from 'styled-components';
import { media } from '../../styles/breakpoints';

import SidebarLogo from './SidebarLogo';
import MainNav from './MainNav';

import { useSidebar } from '../../context/SidebarContext';

const StyledSidebar = styled.aside`
	width: 250px;
	padding: 3.2rem 2.4rem;
	background-color: var(--color-grey-0);
	border-right: 1px solid var(--color-grey-100);
	grid-row: 1/-1;

	display: flex;
	flex-direction: column;
	gap: 3.2rem;
	transition: all 300ms ease-in-out;

	margin-left: ${(props) => (props.open ? '-250px' : '0')};

	${media.tb`
	padding: 1.2rem 0.2rem;
	gap: 1.2rem;

	width: 150px;
	margin-left: ${(props) => (props.open ? '-150px' : '0')};
	`}

	${media.sm`
	width: 80px;
	margin-left: ${(props) => (props.open ? '-80px' : '0')};
		`}

	${media.xs`
	width: 50px;
	margin-left: ${(props) => (props.open ? '-50px' : '0')};
		`}

		${media.xxs`
	width: 45px;
	margin-left: ${(props) => (props.open ? '-45px' : '0')};
		`}
`;

function Sidebar() {
	const { isOpen } = useSidebar();

	return (
		<StyledSidebar open={!isOpen ? 1 : 0}>
			<SidebarLogo />
			<MainNav />
		</StyledSidebar>
	);
}

export default Sidebar;
