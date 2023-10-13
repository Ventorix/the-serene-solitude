import styled from 'styled-components';
import { media } from '../styles/breakpoints';

import HeaderMenu from './HeaderMenu';
import Toggler from './sidebar/Toggler';

import UserAvatar from '../features/authentication/UserAvatar';

const StyledHeader = styled.header`
	background-color: var(--color-grey-0);
	padding: 1.2rem 4.8rem;
	border-bottom: 1px solid var(--color-grey-100);
	display: flex;
	gap: 2.4rem;
	align-items: center;
	justify-content: flex-end;

	${media.xs`
		padding: 0.7rem 3.4rem
	`}

	${media.xxs`
		padding: 0.4rem 1.7rem
	`}
`;

function Header() {
	return (
		<StyledHeader>
			<Toggler />
			<UserAvatar />
			<HeaderMenu />
		</StyledHeader>
	);
}

export default Header;
