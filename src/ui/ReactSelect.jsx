import styled from 'styled-components';
import { media } from '../styles/breakpoints';

import Select from 'react-select';

import { useDarkMode } from '../context/DarkModeContext';

const StyledSelect = styled(Select)`
	& .react-select__control {
		background-color: var(--color-grey-0);
		border: 1px solid
			${(props) => (props.type === 'white' ? 'var(--color-grey-100)' : 'var(--color-grey-300)')};
		color: ${(props) => (props.dark ? ' var(--color-brand-50)' : 'white')};
		cursor: pointer;
		outline: none;
		box-shadow: var(--shadow-sm);

		&:hover {
			border: 1px solid var(--color-brand-500);
		}
	}

	& .react-select__value-container {
		width: 240px;
		border-radius: var(--border-radius-sm);
		background-color: var(--color-grey-0);
		font-size: 1.4rem;
		font-weight: 600;

		${media.md`
			font-size: 1.2rem;
		`}
	}

	& .react-select__menu {
		font-size: 1.2rem;
		background-color: var(--color-grey-0);

		${media.md`
			font-size: 1.0rem;
		`}
	}

	& .react-select__menu-list {
	}

	& .react-select__option {
		cursor: pointer;
		font-size: 1.3rem;
		font-weight: 500;

		&:hover {
			background-color: ${(props) =>
				props.type === 'white' ? 'var(--color-grey-100)' : 'var(--color-grey-300)'};
		}

		&:active {
			background-color: ${(props) =>
				props.type === 'white' ? 'var(--color-grey-100)' : 'var(--color-grey-300)'};
		}

		${media.md`
			font-size: 1.0rem;
		`}
	}

	& .react-select__option--is-focused {
		background-color: ${(props) =>
			props.type === 'white' ? 'var(--color-grey-100)' : 'var(--color-grey-300)'};
	}

	& .react-select__option--is-selected {
		font-weight: 700;
		color: var(--color-brand-500);
		background-color: ${(props) =>
			props.type === 'white' ? 'var(--color-grey-200)' : 'var(--color-grey-400)'};
	}

	& .react-select__single-value {
		color: var(--color-grey-600);
	}

	& .react-select__control--is-focused.react-select__control--menu-is-open {
		border-color: ${(props) =>
			props.type === 'white' ? 'var(--color-grey-100)' : 'var(--color-grey-300)'};
		box-shadow: 0 0 5px var(--color-brand-600);
	}

	& .react-select__control--is-focused {
		border-color: ${(props) =>
			props.type === 'white' ? 'var(--color-grey-100)' : 'var(--color-grey-300)'};
		box-shadow: 0 0 5px var(--color-brand-600);
	}

	& .react-select__indicator-separator {
		display: none;
	}

	& .react-select__dropdown-indicator > svg {
		fill: var(--color-brand-600);
		&:hover {
			fill: var(--color-grey-600);
		}
	}
`;

function ReactSelect({ options, value, onChange, type }) {
	const { isDarkMode } = useDarkMode();

	return (
		<StyledSelect
			options={options}
			value={value}
			onChange={onChange}
			isSearchable={false}
			classNamePrefix={'react-select'}
			title='Sort by'
			aria-label='Sort by'
			dark={isDarkMode ? 1 : 0}
			type={type}
		/>
	);
}

export default ReactSelect;
