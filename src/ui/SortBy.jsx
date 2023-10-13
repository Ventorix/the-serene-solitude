import { useSearchParams } from 'react-router-dom';

import ReactSelect from './ReactSelect';

function SortBy({ options }) {
	const [searchParams, setSearchparams] = useSearchParams();

	const currentValue = searchParams.get('sortBy') || '';

	const currentOption = currentValue
		? options.find((option) => option.value === currentValue)
		: options[0];

	function handleChange(option) {
		searchParams.set('sortBy', option.value);
		setSearchparams(searchParams);
	}

	return (
		<ReactSelect options={options} value={currentOption} type='white' onChange={handleChange} />
	);
}

export default SortBy;
