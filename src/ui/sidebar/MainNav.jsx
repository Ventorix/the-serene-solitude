import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
import { media } from '../../styles/breakpoints';

import {
	HiOutlineHome,
	HiOutlineCalendarDays,
	HiOutlineCog6Tooth,
	HiOutlineHomeModern,
	HiOutlineUsers,
} from 'react-icons/hi2';

import { useSidebar } from '../../context/SidebarContext';

const NavList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
`;

const NavTitle = styled.span`
	${media.tb`
		font-size: 1.4rem;
	`}

	${media.sm`
		display: none;
	`}
`;

const StyledNavLink = styled(NavLink)`
	&:link,
	&:visited {
		display: flex;
		align-items: center;

		gap: 1.2rem;

		color: var(--color-grey-600);
		font-size: 1.6rem;
		font-weight: 500;
		padding: 1.2rem 2.4rem;
		transition: all 0.3s;

		${media.sm`
		justify-content: center;
			padding: 1.2rem 1.4rem;
		`}
	}

	/* This works because react-router places the active class on the active NavLink */
	&:hover,
	&:active,
	&.active:link,
	&.active:visited {
		color: var(--color-grey-800);
		background-color: var(--color-grey-50);
		border-radius: var(--border-radius-sm);
	}

	& svg {
		width: 2.4rem;
		height: 2.4rem;
		color: var(--color-grey-400);
		transition: all 0.3s;
	}

	&:hover svg,
	&:active svg,
	&.active:link svg,
	&.active:visited svg {
		color: var(--color-brand-600);
	}
`;

function MainNav() {
	const { isOpen } = useSidebar();

	return (
		<nav>
			<NavList>
				<li>
					<StyledNavLink title='Home' to='/dashboard'>
						<HiOutlineHome />
						<NavTitle>Home</NavTitle>
					</StyledNavLink>
				</li>
				<li>
					<StyledNavLink title='Bookings' to='/bookings'>
						<HiOutlineCalendarDays />
						<NavTitle>Bookings</NavTitle>
					</StyledNavLink>
				</li>
				<li>
					<StyledNavLink title='Cabins' to='/cabins'>
						<HiOutlineHomeModern />
						<NavTitle>Cabins</NavTitle>
					</StyledNavLink>
				</li>
				<li>
					<StyledNavLink title='Users' to='/users'>
						<HiOutlineUsers />
						<NavTitle>Users</NavTitle>
					</StyledNavLink>
				</li>
				<li>
					<StyledNavLink title='Settings' to='/settings'>
						<HiOutlineCog6Tooth />
						<NavTitle>Settings</NavTitle>
					</StyledNavLink>
				</li>
			</NavList>
		</nav>
	);
}

export default MainNav;
