import styled from 'styled-components';
import Heading from '../../ui/Heading';
import DashboardFilter from './DashboardFilter';
import { media } from '../../styles/breakpoints';

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

function FilterRow() {
	return (
		<StyledFilterRow>
			<Heading as='h1'>Dashboard</Heading>
			<DashboardFilter />
		</StyledFilterRow>
	);
}

export default FilterRow;
