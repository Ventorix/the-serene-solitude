import styled, { css } from 'styled-components';
import { media } from '../styles/breakpoints';

const Heading = styled.h1`
	${(props) =>
		props.as === 'h1' &&
		css`
			font-size: 3rem;
			font-weight: 600;

			${media.xxs`
		font-size: 2.2rem;
		text-align: center;
	`}
		`}

	${(props) =>
		props.as === 'h2' &&
		css`
			font-size: 2rem;
			font-weight: 600;

			${media.xxs`
		font-size: 1.4rem;
	`}
		`}
    
    ${(props) =>
		props.as === 'h3' &&
		css`
			font-size: 2rem;
			font-weight: 500;
		`}

		${(props) =>
		props.as === 'h4' &&
		css`
			font-size: 3rem;
			font-weight: 600;
			text-align: center;
		`}
	line-height: 1.4;

	${media.xs`
		text-align: center;
	`}
`;

export default Heading;
