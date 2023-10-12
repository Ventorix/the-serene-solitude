import styled from 'styled-components';
import { media } from '../../styles/breakpoints';

import Heading from '../../ui/Heading';
import BookingTableOperations from './BookingTableOperations';

const StyledFilterRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	${media.md`
	flex-direction: column;
    gap: 0.3rem;
	`}
`;

function BookingFilterRow() {
	return (
		<StyledFilterRow>
			<Heading as='h1'>Bookings</Heading>
			<BookingTableOperations />
		</StyledFilterRow>
	);
}

export default BookingFilterRow;
