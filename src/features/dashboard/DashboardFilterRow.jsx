import styled from 'styled-components';
import { media } from '../../styles/breakpoints';

import Heading from '../../ui/Heading';
import DashboardFilter from './DashboardFilter';

const StyledFilterRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	${media.lg`
	`}

	${media.sm`
    flex-direction: column;
    gap: 0.3rem;
	`}
`;

function DashboardFilterRow() {
	return (
		<StyledFilterRow>
			<Heading as='h1'>Dashboard</Heading>
			<DashboardFilter />
		</StyledFilterRow>
	);
}

export default DashboardFilterRow;
