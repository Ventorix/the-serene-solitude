import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import ButtonIcon from '../../ui/ButtonIcon';

import { useUser } from './useUser';

const StyledUserAvatar = styled.div`
	display: flex;
	gap: 1.2rem;
	align-items: center;
	font-weight: 500;
	font-size: 1.4rem;
	color: var(--color-grey-600);
`;

const Avatar = styled.img`
	display: block;
	width: 4rem;
	width: 3.6rem;
	aspect-ratio: 1;
	object-fit: cover;
	object-position: center;
	border-radius: 50%;
	outline: 2px solid var(--color-grey-100);
`;

function UserAvatar() {
	const navigate = useNavigate();
	const { user } = useUser();
	const { fullName, avatar } = user.user_metadata;

	return (
		<StyledUserAvatar>
			<ButtonIcon title='Avatar' aria-label='Avatar' onClick={() => navigate('/account')}>
				<Avatar src={avatar || 'default-user.jpg'} alt={`Avatar of ${fullName}`} />{' '}
			</ButtonIcon>
			<span>{fullName}</span>
		</StyledUserAvatar>
	);
}

export default UserAvatar;
