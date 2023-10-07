import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateBooking } from '../../services/apiBookings';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useCheckIn() {
	const queryClient = useQueryClient();
	const navigate = useNavigate();

	const { mutate: checkin, isLoading: isCheckinngIn } = useMutation({
		mutationFn: (bookingId) => updateBooking(bookingId, { status: 'checked-in', isPaid: true }),
		onSuccess: (data) => {
			toast.success(`Booking #${data.id} successfully checked-in`);
			queryClient.invalidateQueries({ active: true });
			navigate(-1);
		},
		onError: () => toast.error('There was an error while checking in'),
	});

	return { checkin, isCheckinngIn };
}

export default useCheckIn;
