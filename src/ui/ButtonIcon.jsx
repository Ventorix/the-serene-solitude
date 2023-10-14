import styled from 'styled-components';
import { media } from '../styles/breakpoints';

const ButtonIcon = styled.button`
	background: none;
	border: none;
	padding: 0.6rem;
	border-radius: var(--border-radius-sm);
	transition: all 0.2s;

	&:hover {
		background-color: var(--color-grey-100);
	}

	& svg {
		width: 2.75rem;
		height: 2.75rem;
		color: var(--color-brand-600);
	}

	${media.xxs`
		padding: 0.2rem;
	`}
`;

export default ButtonIcon;
