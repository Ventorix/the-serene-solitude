import styled from 'styled-components';
import { media } from '../styles/breakpoints';

const StyledDataItem = styled.div`
	display: flex;
	align-items: center;
	gap: 1.6rem;
	padding: 0.8rem 0;

	${media.xs`
    font-size: 1.3rem;
		`}

	${media.xxs`
    font-size: 1.1rem;
		`}
`;

const Label = styled.span`
	display: flex;
	align-items: center;
	gap: 0.8rem;
	font-weight: 500;

	& svg {
		width: 2rem;
		height: 2rem;
		color: var(--color-brand-600);
	}
`;

function DataItem({ icon, label, children }) {
	return (
		<StyledDataItem>
			<Label>
				{icon}
				<span>{label}</span>
			</Label>
			{children}
		</StyledDataItem>
	);
}

export default DataItem;
