import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createEditCabin } from '../../services/apiCabins';
import toast from 'react-hot-toast';

export function useCreateCabin() {
	const queryClient = useQueryClient();

	const { mutate: addCabin, isLoading: isAdding } = useMutation({
		mutationFn: createEditCabin,
		onSuccess: () => {
			toast.success('New cabin succsessfully added');
			queryClient.invalidateQueries({
				queryKey: ['cabins'],
			});
		},
		onError: (err) => {
			toast.error(err.message);
		},
	});

	return { isAdding, addCabin };
}
