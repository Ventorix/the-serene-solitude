import styled from 'styled-components';
import { media } from '../../styles/breakpoints';

import { Link } from 'react-router-dom';
import { useDarkMode } from '../../context/DarkModeContext';

const StyledLogo = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Img = styled.img`
	height: 14.6rem;
	width: auto;

	${media.lg`
	height:11.6rem;
	`}

	${media.tb`
	height:6.6rem;
	`}

	${media.sm`
		height:4.6rem;
	`}

	${media.xs`
		height:3.6rem;
	`}

	${media.xxs`
		height:2.6rem;
	`}
`;

function SidebarLogo() {
	const { isDarkMode } = useDarkMode();

	return (
		<StyledLogo to={'/'}>
			<Img src={isDarkMode ? '/logo-dark.svg' : '/logo-light.svg'} alt='Logo' />
		</StyledLogo>
	);
}

export default SidebarLogo;
