import styled from 'styled-components';
import { media } from '../../styles/breakpoints';

import Heading from '../../ui/Heading';
import CabinTableOperations from './CabinTableOperations';

const StyledFilterRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	${media.md`
	flex-direction: column;
    gap: 0.3rem;
	`}
`;

function CabinFilterRow() {
	return (
		<StyledFilterRow>
			<Heading as='h1'>Cabins</Heading>
			<CabinTableOperations />
		</StyledFilterRow>
	);
}

export default CabinFilterRow;
