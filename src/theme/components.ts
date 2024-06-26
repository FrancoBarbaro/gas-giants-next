import { colors } from '~/theme/colors';

const navButtonStyle = {
	w: 'fit-content',
	h: 'fit-content',
	textTransform: 'uppercase',
	bg: colors.white,
	color: colors.bluePurple,
	lineHeight: 4,
	fontWeight: 'bold',
	transition: 'all 0.5s',
	letterSpacing: { base: 1, sm: 1.2, xxl: 2 },
	fontFamily: `'Varela Round', sans-serif`,
	px: { base: 2, xs: 3, sm: 3.5, md: 5, lg: 6, xxl: 7 },
	py: { base: 1, xs: 1.5, sm: 2.5, md: 3.5, lg: 4, xxl: 5 },
	borderRadius: { base: 7, xs: 8, sm: 10, md: 13, xxl: 14 },
	fontSize: { base: 8, xs: 10, sm: 'sm', md: 'md', lg: 'lg', xxl: '2xl' },
	boxShadow: {
		base: `4px 4px 0 ${colors.bluePurple}`,
		xs: `6px 6px 0 ${colors.bluePurple}`,
		sm: `8px 8px 0 ${colors.bluePurple}`,
		md: `10px 10px 0 ${colors.bluePurple}`,
	},
};

const navButtonHoverStyle = {
	bg: colors.bluePurple,
	color: colors.white,
	boxShadow: {
		base: `-4px -4px 0 ${colors.white}`,
		xs: `-6px -6px 0 ${colors.white}`,
		sm: `-8px -8px 0 ${colors.white}`,
		md: `-10px -10px 0 ${colors.white}`,
	},
};

const Button = {
	variants: {
		'nav-button': {
			...navButtonStyle,
			_hover: navButtonHoverStyle,
			_focus: navButtonHoverStyle,
		},
	},
};

const runeStyle = {
	color: 'transparent',
	fontSize: { base: 64, xxl: '8xl' },
	borderRadius: 4,
	textShadow: `0 0 0.125em ${colors.runeShadow}, 0 0 0.45em ${colors.darkPurple}`,
	transition: 'color 0.5s linear, text-shadow 0.5s linear',
	WebkitTextStroke: `1px ${colors.runeOutline}`,
};

const runeHoverStyle = {
	textDecoration: 'none',
	color: colors.neonPink,
	textShadow: `0 0 0.4em ${colors.runeShadowOnHover}, 0 0 0.9em ${colors.neonPink}`,
	WebkitTextStroke: `1px ${colors.runeOutlineOnHover}`,
};

const runeActiveStyle = {
	color: colors.neonRed,
	textShadow: `0 0 0.5em ${colors.runeShadowOnClick}, 0 0 0.9em ${colors.neonRed}`,
	WebkitTextStroke: `1px ${colors.runeOutlineOnClick}`,
};

const gradientUnderlineStyle = {
	bg: 'linear-gradient(90deg, magenta, blue)',
	bgSize: '0% 3px',
	bgRepeat: 'no-repeat',
	bgPos: '0% 95%',
	transition: '0.3s ease',
};

const gradientUnderlineHoverStyle = {
	textDecoration: 'none',
	bgSize: '100% 3px',
};

const Link = {
	variants: {
		rune: {
			...runeStyle,
			_hover: runeHoverStyle,
			_focus: { ...runeHoverStyle, boxShadow: 'none' },
			_active: runeActiveStyle,
		},
		'gradient-underline': {
			...gradientUnderlineStyle,
			_hover: gradientUnderlineHoverStyle,
			_focus: { ...gradientUnderlineHoverStyle, boxShadow: 'none' },
			_active: { color: colors.magentaPurple },
		},
	},
};

export const components = {
	Button,
	Link,
};
