import { useForm } from 'react-hook-form';

import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';

import { useSignup } from './useSignup';

// FullName regex: /^[a-zA-Z]+ [a-zA-Z]+$/
// Email regex: /\S+@\S+\.\S+/
// Password regex: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/

function SignupForm() {
	const { register, formState, getValues, handleSubmit, reset } = useForm();
	const { signup, isLoading } = useSignup();
	const { errors } = formState;

	function onSubmit({ fullName, email, password }) {
		signup({ fullName, email, password }, { onSettled: () => reset() });
	}

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<FormRow label='Full name' error={errors?.fullName?.message}>
				<Input
					disabled={isLoading}
					autoComplete='name'
					type='text'
					id='fullName'
					{...register('fullName', {
						required: 'This field is required',
						pattern: {
							value: /^[a-zA-Z]+ [a-zA-Z]+$/,
							message: 'Please provide a valid full name',
						},
					})}
				/>
			</FormRow>

			<FormRow label='Email address' error={errors?.email?.message}>
				<Input
					disabled={isLoading}
					autoComplete='email'
					type='email'
					id='email'
					{...register('email', {
						required: 'This field is required',
						pattern: { value: /\S+@\S+\.\S+/, message: 'Please provide a valid email address' },
					})}
				/>
			</FormRow>

			<FormRow label='Password (min 8 characters)' error={errors?.password?.message}>
				<Input
					disabled={isLoading}
					autoComplete='new-password'
					type='password'
					id='password'
					{...register('password', {
						required: 'This field is required',
						pattern: {
							value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
							message:
								'Please provide a valid password with at least one number, one lowercase and one uppercase letter',
						},
					})}
				/>
			</FormRow>

			<FormRow label='Repeat password' error={errors?.passwordConfirm?.message}>
				<Input
					disabled={isLoading}
					autoComplete='new-password'
					type='password'
					id='passwordConfirm'
					{...register('passwordConfirm', {
						required: 'This field is required',
						validate: (value) => value === getValues().password || 'Passwords must to match',
					})}
				/>
			</FormRow>

			<FormRow>
				{/* type is an HTML attribute! */}
				<Button variation='secondary' type='reset' onClick={reset} disabled={isLoading}>
					Cancel
				</Button>
				<Button disabled={isLoading}>Create new user</Button>
			</FormRow>
		</Form>
	);
}

export default SignupForm;
