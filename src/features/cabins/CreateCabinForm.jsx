import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

import toast from 'react-hot-toast';

import Input from '../../ui/Input';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import Textarea from '../../ui/Textarea';
import { createCabin } from '../../services/apiCabins';

function CreateCabinForm() {
	const { register, handleSubmit, reset, getValues, formState } = useForm();

	const { errors } = formState;

	const queryClient = useQueryClient();

	const { mutate, isLoading: isAdded } = useMutation({
		mutationFn: createCabin,
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

	function onSubmit(data) {
		mutate({ ...data, image: data.image[0] });
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
					disabled={isAdded}
					{...register('name', { required: 'This field is required' })}
				/>
			</FormRow>

			<FormRow label={'Maximum capacity'} error={errors?.maxCapacity?.message}>
				<Input
					type='number'
					id='maxCapacity'
					min='0'
					disabled={isAdded}
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
					disabled={isAdded}
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
					disabled={isAdded}
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
					disabled={isAdded}
					{...register('description', { required: 'This field is required' })}
				/>
			</FormRow>

			<FormRow label={'Cabin photo'} error={errors?.image?.message}>
				<FileInput
					disabled={isAdded}
					id='image'
					accept='image/*'
					{...register('image', { required: 'This field is required' })}
				/>
			</FormRow>

			<FormRow>
				{/* type is an HTML attribute! */}
				<Button disabled={isAdded} variation='secondary' type='reset'>
					Cancel
				</Button>
				<Button disabled={isAdded}>Add cabin</Button>
			</FormRow>
		</Form>
	);
}

export default CreateCabinForm;
