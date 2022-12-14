import { colors } from '~/common/colors';

const navButtonStyle = {
	textTransform: 'uppercase',
	bg: colors.white,
	color: colors.galacticPurple,
	px: 6,
	py: 3,
	lineHeight: 4,
	fontWeight: 'bold',
	boxShadow: `10px 10px 0 ${colors.galacticPurple}`,
	transition: 'all 0.5s',
	borderRadius: 10,
	letterSpacing: '1.2px',
	fontFamily: `'Varela Round', sans-serif`,
};

const navButtonHoverStyle = {
	bg: colors.galacticPurple,
	color: colors.white,
	boxShadow: `-10px -10px 0 ${colors.white}`,
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
	fontSize: 64,
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

// use javascript or calc() to make its position depend on the line height
const gradientUnderlineStyle = {
	bg: 'linear-gradient(90deg, magenta, blue)',
	bgSize: '0% 3px',
	bgRepeat: 'no-repeat',
	bgPos: '0% 90%',
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
