import styled from 'styled-components';
import { media } from '../styles/breakpoints';

const Input = styled.input`
	border: 1px solid var(--color-grey-300);
	background-color: var(--color-grey-0);
	border-radius: var(--border-radius-sm);
	padding: 0.8rem 1.2rem;
	box-shadow: var(--shadow-sm);

	${media.tb`
		padding: 0.4rem 1.2rem;
	`}
`;

export default Input;
