import { useState } from 'react';

import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';

import { useUser } from './useUser';
import { useUpdateUser } from './useUpdateUser';
import { useForm } from 'react-hook-form';

function UpdateUserDataForm() {
	// We don't need the loading state, and can immediately use the user data, because we know that it has already been loaded at this point
	const {
		user: {
			email,
			user_metadata: { fullName: currentFullName },
		},
	} = useUser();

	const { updateUser, isUpdating } = useUpdateUser();
	const [avatar, setAvatar] = useState(null);
	const { register, formState, handleSubmit, reset } = useForm();
	const { errors } = formState;

	function onSubmit({ fullName }) {
		if (!fullName) return;

		updateUser(
			{ fullName, avatar },
			{
				onSuccess: () => {
					setAvatar(null);
					reset();
				},
			},
		);
	}

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<FormRow label='Email address'>
				<Input value={email} disabled />
			</FormRow>
			<FormRow label='Full name' error={errors?.fullName?.message}>
				<Input
					type='text'
					defaultValue={currentFullName}
					id='fullName'
					disabled={isUpdating}
					{...register('fullName', {
						required: 'This field is required',
						pattern: {
							value: /^[a-zA-Z]+ [a-zA-Z]+$/,
							message: 'Please provide a valid full name',
						},
					})}
				/>
			</FormRow>
			<FormRow label='Avatar image'>
				<FileInput
					id='avatar'
					accept='image/*'
					onChange={(e) => setAvatar(e.target.files[0])}
					disabled={isUpdating}
				/>
			</FormRow>
			<FormRow>
				<Button type='reset' variation='secondary' onClick={reset} disabled={isUpdating}>
					Cancel
				</Button>
				<Button disabled={isUpdating}>Update account</Button>
			</FormRow>
		</Form>
	);
}

export default UpdateUserDataForm;
