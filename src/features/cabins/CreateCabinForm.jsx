import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import Input from '../../ui/Input';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import Textarea from '../../ui/Textarea';

import { createEditCabin } from '../../services/apiCabins';
import { useForm } from 'react-hook-form';

function CreateCabinForm({ cabinToEdit = {} }) {
	const { id: editId, ...editValues } = cabinToEdit;

	const isEditSession = Boolean(editId);

	const { register, handleSubmit, reset, getValues, formState } = useForm({
		defaultValues: isEditSession ? editValues : {},
	});

	const { errors } = formState;

	const queryClient = useQueryClient();

	const { mutate: addCabin, isLoading: isAdding } = useMutation({
		mutationFn: createEditCabin,
		onSuccess: () => {
			toast.success('New cabin succsessfully added');
			queryClient.invalidateQueries({
				queryKey: ['cabins'],
			});

			reset();
		},
		onError: (err) => {
			toast.error(err.message);
		},
	});

	const { mutate: editCabin, isLoading: isEditing } = useMutation({
		mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
		onSuccess: () => {
			toast.success('Cabin succsessfully edited');
			queryClient.invalidateQueries({
				queryKey: ['cabins'],
			});

			reset();
		},
		onError: (err) => {
			toast.error(err.message);
		},
	});

	const isWorking = isAdding || isEditing;

	function onSubmit(data) {
		const image = typeof data.image === 'string' ? data.image : data.image[0];

		if (isEditSession)
			editCabin(
				{ newCabinData: { ...data, image }, id: editId },
				{
					onSuccess: () => {
						reset();
					},
				},
			);
		else
			addCabin(
				{ ...data, image: image },
				{
					onSuccess: () => {
						reset();
					},
				},
			);
	}

	function onError(errors) {
		console.log(errors);
	}

	return (
		<Form onSubmit={handleSubmit(onSubmit, onError)}>
			<FormRow label={'Cabin name'} error={errors?.name?.message}>
				<Input
					type='text'
					id='name'
					disabled={isWorking}
					{...register('name', { required: 'This field is required' })}
				/>
			</FormRow>

			<FormRow label={'Maximum capacity'} error={errors?.maxCapacity?.message}>
				<Input
					type='number'
					id='maxCapacity'
					min='0'
					disabled={isWorking}
					{...register('maxCapacity', {
						required: 'This field is required',
						min: {
							value: 1,
							message: 'Capacity should be at least 1',
						},
					})}
				/>
			</FormRow>

			<FormRow label={'Regular price'} error={errors?.regularPrice?.message}>
				<Input
					type='number'
					id='regularPrice'
					min='0'
					disabled={isWorking}
					{...register('regularPrice', {
						required: 'This field is required',
						min: {
							value: 1,
							message: 'Price should be at least 1',
						},
					})}
				/>
			</FormRow>

			<FormRow label={'Discount'} error={errors?.discount?.message}>
				<Input
					type='number'
					id='discount'
					defaultValue={0}
					min='0'
					disabled={isWorking}
					{...register('discount', {
						required: 'This field is required',
						validate: (value) =>
							value <= Number(getValues().regularPrice) ||
							'Discount should be less than regular price',
					})}
				/>
			</FormRow>

			<FormRow label={'Description for website'} error={errors?.description?.message}>
				<Textarea
					type='text'
					id='description'
					defaultValue=''
					disabled={isWorking}
					{...register('description', { required: 'This field is required' })}
				/>
			</FormRow>

			<FormRow label={'Cabin photo'} error={errors?.image?.message}>
				<FileInput
					disabled={isWorking}
					id='image'
					accept='image/*'
					{...register('image', { required: isEditSession ? false : 'This field is required' })}
				/>
			</FormRow>

			<FormRow>
				{/* type is an HTML attribute! */}
				<Button disabled={isWorking} variation='secondary' type='reset'>
					Cancel
				</Button>
				<Button disabled={isWorking}>{isEditSession ? 'Edit cabin' : 'Add new cabin'}</Button>
			</FormRow>
		</Form>
	);
}

export default CreateCabinForm;
