import styled from 'styled-components';
import { media } from '../styles/breakpoints';

const StyledFormRow = styled.div`
	display: grid;
	align-items: center;
	grid-template-columns: 24rem 1fr 1.2fr;
	gap: 2.4rem;

	padding: 1.2rem 0;

	&:first-child {
		padding-top: 0;
	}

	&:last-child {
		padding-bottom: 0;
	}

	&:not(:last-child) {
		border-bottom: 1px solid var(--color-grey-100);
	}

	&:has(button) {
		display: flex;
		justify-content: flex-end;
		gap: 1.2rem;
	}

	${media.md`
		grid-template-columns: 15rem 25rem;
	`}

	${media.xtb`
		grid-template-columns: 14rem 1fr;
	`}

	${media.tb`
		grid-template-columns: 10rem 18rem;
	`}

	${media.sm`
		gap: 2.0rem;
		grid-template-columns: 1fr;
	`}

	${media.xs`
		gap: 1.6rem;
		padding: 1.3rem 2.2rem;
	`}

	${media.xs`
		gap: 1.4rem;
		padding: 1.1rem 1.7rem;
	`}
`;

const Label = styled.label`
	font-weight: 500;
`;

const Error = styled.span`
	font-size: 1.4rem;
	color: var(--color-red-700);
`;

function FormRow({ error, label, children }) {
	return (
		<StyledFormRow>
			<Label htmlFor={children.props?.id}>{label}</Label>
			{children}
			{error && <Error>{error}</Error>}
		</StyledFormRow>
	);
}

export default FormRow;
