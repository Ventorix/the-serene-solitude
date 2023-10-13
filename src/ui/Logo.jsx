import styled from 'styled-components';
import { media } from '../styles/breakpoints';

import { useDarkMode } from '../context/DarkModeContext';

const StyledLogo = styled.div`
	text-align: center;
`;

const Img = styled.img`
	height: 14.6rem;
	width: auto;

	${media.tb`
	height:11.6rem;
	`}

	${media.xxs`
	height:9.6rem;
	`}
`;

function Logo() {
	const { isDarkMode } = useDarkMode();

	return (
		<StyledLogo>
			<Img src={isDarkMode ? '/logo-dark.svg' : '/logo-light.svg'} alt='Logo' />
		</StyledLogo>
	);
}

export default Logo;
