import styled from 'styled-components';
import { useDarkMode } from '../../context/DarkModeContext';
import { media } from '../../styles/breakpoints';

const StyledLogo = styled.div`
	text-align: center;
`;

const Img = styled.img`
	height: 14.6rem;
	width: auto;

	${media.lg`
	height:11.6rem;
	`}
`;

function Logo() {
	const { isDarkMode } = useDarkMode();

	return (
		<StyledLogo>
			<Img src={isDarkMode ? '/logo-dark.png' : '/logo-light.png'} alt='Logo' />
		</StyledLogo>
	);
}

export default Logo;
