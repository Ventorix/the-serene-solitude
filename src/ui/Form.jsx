import styled, { css } from 'styled-components';
import { media } from '../styles/breakpoints';

const Form = styled.form`
	${(props) =>
		props.type === 'regular' &&
		css`
			padding: 2.4rem 4rem;

			/* Box */
			background-color: var(--color-grey-0);
			border: 1px solid var(--color-grey-100);
			border-radius: var(--border-radius-md);
		`}

	${(props) =>
		props.type === 'modal' &&
		css`
			width: 80rem;

			${media.md`
				width: 60rem;
			`}

			${media.tb`
				width: 50rem;
			`}

			${media.sm`
				width: 40rem;
				font-size: 1.2rem;
			`}

			${media.xs`
				width: 33rem;
				font-size: 1.2rem;
			`}

			${media.xxs`
				width: 25rem;
				font-size: 1.1rem;
			`}
		`}
    
  overflow: hidden;
	font-size: 1.4rem;
`;

Form.defaultProps = {
	type: 'regular',
};

export default Form;
