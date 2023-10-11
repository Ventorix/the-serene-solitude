import styled, { css } from 'styled-components';
import Spinner from './Spinner';
import { useDarkMode } from '../context/DarkModeContext';

const FullPage = styled.div`
	height: 100vh;

	display: flex;
	align-items: center;
	justify-content: center;

	${(props) =>
		props.darkmode &&
		css`
			background-color: var(--color-grey-900);
		`}

	background-color: var(--color-grey-50);
`;

function FullPageSpinner() {
	const { isDarkMode } = useDarkMode();

	return (
		<FullPage darkmode={isDarkMode ? 1 : 0}>
			<Spinner />
		</FullPage>
	);
}

export default FullPageSpinner;
