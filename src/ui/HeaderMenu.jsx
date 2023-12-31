import styled from 'styled-components';
import Logout from '../features/authentication/Logout';
import ButtonIcon from './ButtonIcon';
import DarkModeToggle from './DarkModeToggle';

import { HiOutlineUser } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

const StyledHeaderMenu = styled.ul`
	display: flex;
	gap: 0.4rem;
`;

function HeaderMenu() {
	const navigate = useNavigate();

	return (
		<StyledHeaderMenu>
			<li>
				<ButtonIcon title='Account' aria-label='Account' onClick={() => navigate('/account')}>
					<HiOutlineUser />
				</ButtonIcon>
			</li>
			<li>
				<DarkModeToggle title='Dark mode' aria-label='Dark mode' />
			</li>
			<li>
				<Logout title='Logout' aria-label='Logout' />
			</li>
		</StyledHeaderMenu>
	);
}

export default HeaderMenu;
