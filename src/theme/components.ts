import { colors } from '~/common/colors';

const buttonStyle = {
	textTransform: 'uppercase',
	bg: colors.white,
	color: colors.galacticPurple,
	px: 6,
	py: 3,
	fontWeight: 'bold',
	boxShadow: `10px 10px 0 ${colors.galacticPurple}`,
	transition: 'all 0.5s',
	borderRadius: 10,
	letterSpacing: '1.2px',
	fontFamily: `'Varela Round', sans-serif`,
};

const activeButtonStyle = {
	bg: colors.galacticPurple,
	color: colors.white,
	boxShadow: `-10px -10px 0 ${colors.white}`,
};

export const Button = {
	variants: {
		'nav-button': {
			...buttonStyle,
			_hover: activeButtonStyle,
			_focus: activeButtonStyle,
			// _disabled: { ...buttonStyle, cursor: 'pointer', _hover: buttonStyle },
		},
	},
};

const linkHoverStyle = {
	textDecoration: 'none',
	bgSize: '100% 3px',
};

export const Link = {
	variants: {
		'gradient-underline': {
			bg: 'linear-gradient(90deg, magenta, blue)',
			bgSize: '0% 3px',
			bgRepeat: 'no-repeat',
			bgPos: '0% 90%',
			transition: '0.3s ease',
			_active: { color: '#9b6bf3' },
			_hover: linkHoverStyle,
			_focus: { ...linkHoverStyle, boxShadow: 'none' },
		},
	},
};
