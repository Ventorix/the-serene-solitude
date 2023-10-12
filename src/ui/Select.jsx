import styled from 'styled-components';
import { media } from '../styles/breakpoints';

const StyledSelect = styled.select`
	font-size: 1.4rem;
	padding: 0.8rem 1.2rem;
	border: 1px solid
		${(props) => (props.type === 'white' ? 'var(--color-grey-100)' : 'var(--color-grey-300)')};
	border-radius: var(--border-radius-sm);
	background-color: var(--color-grey-0);
	font-weight: 500;
	cursor: pointer;
	box-shadow: var(--shadow-sm);

	&:hover {
		background-color: var(--color-grey-100);
	}

	${media.md`
	font-size: 1rem;
	`}
`;

function Select({ options, value, onChange, type }) {
	return (
		<StyledSelect
			title='Sort by'
			value={value}
			type={type}
			onChange={onChange}
			aria-label='Sort by'>
			{options.map((option) => (
				<option aria-label='Sort option' value={option.value} key={option.value}>
					{option.label}
				</option>
			))}
		</StyledSelect>
	);
}

export default Select;
