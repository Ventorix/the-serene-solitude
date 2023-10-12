import { css } from 'styled-components';

// const size = {
//   mobileS: '320px',
//   mobileM: '375px',
//   mobileL: '425px',
//   tablet: '768px',
//   laptop: '1024px',
//   laptopL: '1440px',
//   desktop: '2560px'
// }

//  const device = {
//   mobileS: `(min-width: ${size.mobileS})`,
//   mobileM: `(min-width: ${size.mobileM})`,
//   mobileL: `(min-width: ${size.mobileL})`,
//   tablet: `(min-width: ${size.tablet})`,
//   laptop: `(min-width: ${size.laptop})`,
//   laptopL: `(min-width: ${size.laptopL})`,
//   desktop: `(min-width: ${size.desktop})`,
//   desktopL: `(min-width: ${size.desktop})`
// };

const device = {
	xxs: '400px', // for extra small screen mobile
	xs: '475px', // for small screen mobile
	sm: '600px', // for mobile screen
	tb: '768px', // for tablets
	md: '1024px', // for tablets
	lg: '1280px', // for laptops
	xl: '1440px', // for desktop / monitors
	xxl: '1920px', // for big screens
};

export const media = {
	xxs: (...args) => css`
		@media (max-width: ${device.xxs}) {
			${css(...args)};
		}
	`,
	xs: (...args) => css`
		@media (max-width: ${device.xs}) {
			${css(...args)};
		}
	`,
	sm: (...args) => css`
		@media (max-width: ${device.sm}) {
			${css(...args)};
		}
	`,
	tb: (...args) => css`
		@media (max-width: ${device.tb}) {
			${css(...args)};
		}
	`,
	md: (...args) => css`
		@media (max-width: ${device.md}) {
			${css(...args)};
		}
	`,
	lg: (...args) => css`
		@media (max-width: ${device.lg}) {
			${css(...args)};
		}
	`,
	xl: (...args) => css`
		@media (max-width: ${device.xl}) {
			${css(...args)};
		}
	`,
	xxl: (...args) => css`
		@media (max-width: ${device.xxl}) {
			${css(...args)};
		}
	`,
};
