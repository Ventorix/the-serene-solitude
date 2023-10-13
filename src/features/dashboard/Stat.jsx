import styled, { css } from 'styled-components';
import { media } from '../../styles/breakpoints';

import SpinnerMini from '../../ui/SpinnerMini';

const StyledStat = styled.div`
	/* Box */
	background-color: var(--color-grey-0);
	border: 1px solid var(--color-grey-100);
	border-radius: var(--border-radius-md);

	padding: 1.6rem;
	display: flex;
	justify-content: center;
	align-items: center;

	column-gap: 1.6rem;
	row-gap: 0.4rem;

	${media.tb`
	flex-direction: column;
	`}

	${(props) =>
		props.stat === 1 &&
		css`
			grid-area: Stat1;
		`}
	${(props) =>
		props.stat === 2 &&
		css`
			grid-area: Stat2;
		`}
		${(props) =>
		props.stat === 3 &&
		css`
			grid-area: Stat3;
		`}
		${(props) =>
		props.stat === 4 &&
		css`
			grid-area: Stat4;
		`}
`;

const Icon = styled.div`
	min-width: 25%;
	min-height: 25%;
	aspect-ratio: 1;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;

	/* Make these dynamic, based on the received prop */
	background-color: var(--color-${(props) => props.color}-100);

	& svg {
		width: 3.2rem;
		height: 3.2rem;
		color: var(--color-${(props) => props.color}-700);
	}
`;

const StyledBlock = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 0.5rem;
`;

const Title = styled.h5`
	font-size: 1.2rem;
	text-transform: uppercase;
	letter-spacing: 0.4px;
	font-weight: 600;
	color: var(--color-grey-500);

	${media.xs`
	font-size: 0.9rem;
	`}

	${media.xxs`
	font-size: 0.7rem;
	`}
`;

const Value = styled.p`
	font-size: 2.4rem;
	line-height: 1;
	font-weight: 500;

	${media.tb`
	font-size: 1.4rem;
	`}

	${media.xxs`
	font-size: 0.9rem;
	`}
`;

function Stat({ icon, title, value, color, stat, isLoading }) {
	return (
		<StyledStat stat={stat}>
			<Icon color={color}>{icon}</Icon>
			<StyledBlock>
				<Title>{title}</Title>
				{isLoading ? <SpinnerMini /> : <Value>{value}</Value>}
			</StyledBlock>
		</StyledStat>
	);
}

export default Stat;
