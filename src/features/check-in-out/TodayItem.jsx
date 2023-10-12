import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { media } from '../../styles/breakpoints';

import Tag from '../../ui/Tag';
import { Flag } from '../../ui/Flag';
import Button from '../../ui/Button';
import CheckoutButton from './CheckoutButton';

const StyledTodayItem = styled.li`
	display: grid;
	grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
	gap: 1.2rem;
	align-items: center;

	font-size: 1.4rem;
	padding: 0.8rem 0;
	border-bottom: 1px solid var(--color-grey-100);

	grid-template-areas: 'Tag Flag Guest Nights Button';

	&:first-child {
		border-top: 1px solid var(--color-grey-100);
	}

	${media.lg`
	grid-template-columns: 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	grid-template-areas: 
	'Tag Flag'
	'Guest Nights'
	'Button Button';
	`}

	${media.tb`
	grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
	grid-template-areas: 'Tag Flag Guest Nights Button';
	`}

	${media.sm`
	grid-template-columns: 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	grid-template-areas: 
	'Tag Flag'
	'Guest Nights'
	'Button Button';
	`}
`;

const Guest = styled.div`
	font-weight: 500;
	grid-area: Guest;
`;

const NumNights = styled.div`
	grid-area: Nights;
`;

function TodayItem({ activity }) {
	const { id, guests, status, numNights } = activity;
	return (
		<StyledTodayItem>
			{status === 'unconfirmed' && <Tag type={'green'}>Arriving</Tag>}
			{status === 'checked-in' && <Tag type={'blue'}>Departing</Tag>}

			<Flag src={guests.countryFlag} alt={`Flag of ${guests.country}`} />
			<Guest>{guests.fullName}</Guest>
			<NumNights>{numNights} nights</NumNights>

			{status === 'unconfirmed' && (
				<Button size={'small'} variation='primary' as={Link} to={`/checkin/${id}`}>
					Check in
				</Button>
			)}
			{status === 'checked-in' && <CheckoutButton bookingId={id}>Departing</CheckoutButton>}
		</StyledTodayItem>
	);
}

export default TodayItem;
