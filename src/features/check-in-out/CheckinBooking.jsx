import styled from 'styled-components';

import { useEffect, useState } from 'react';

import Row from '../../ui/Row';
import Heading from '../../ui/Heading';
import ButtonGroup from '../../ui/ButtonGroup';
import Button from '../../ui/Button';
import ButtonText from '../../ui/ButtonText';
import Spinner from '../../ui/Spinner';
import Checkbox from '../../ui/Checkbox';
import BookingDataBox from '../../features/bookings/BookingDataBox';

import { useMoveBack } from '../../hooks/useMoveBack';
import { useBooking } from '../bookings/useBooking';
import { formatCurrency } from '../../utils/helpers';
import useCheckIn from './useCheckIn';

const Box = styled.div`
	/* Box */
	background-color: var(--color-grey-0);
	border: 1px solid var(--color-grey-100);
	border-radius: var(--border-radius-md);
	padding: 2.4rem 4rem;
`;

function CheckinBooking() {
	const [confirmPaid, setConfirmPaid] = useState(false);
	const { booking, isLoading } = useBooking();
	const moveBack = useMoveBack();

	useEffect(() => setConfirmPaid(booking?.isPaid || false), [booking?.isPaid]);

	const { checkin, isCheckinngIn } = useCheckIn();

	if (isLoading) return <Spinner />;

	const { id: bookingId, guests, totalPrice, numGuests, hasBreakfast, numNights } = booking;

	function handleCheckin() {
		if (!confirmPaid) return;

		checkin(bookingId);
	}

	return (
		<>
			<Row type='horizontal'>
				<Heading as='h1'>Check in booking #{bookingId}</Heading>
				<ButtonText onClick={moveBack}>&larr; Back</ButtonText>
			</Row>

			<BookingDataBox booking={booking} />

			<Box>
				<Checkbox
					id={bookingId}
					disabled={confirmPaid || isCheckinngIn}
					checked={confirmPaid}
					onChange={() => setConfirmPaid((paid) => !paid)}>
					I confirm that {guests.fullName} has paid the total amount of {formatCurrency(totalPrice)}
				</Checkbox>
			</Box>
			<ButtonGroup>
				<Button onClick={handleCheckin} disabled={!confirmPaid || isCheckinngIn}>
					Check in booking #{bookingId}
				</Button>
				<Button variation='secondary' onClick={moveBack}>
					Back
				</Button>
			</ButtonGroup>
		</>
	);
}

export default CheckinBooking;
