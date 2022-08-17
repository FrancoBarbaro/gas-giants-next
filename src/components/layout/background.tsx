import { Box, keyframes } from '@chakra-ui/react';
import { FC } from 'react';
import { SwitchTransition, Transition } from 'react-transition-group';
import { colors } from '~/common/colors';

type BackgroundProps = {
	currentPath: string;
};

const fadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 1 } });
const fadeOut = keyframes({ from: { opacity: 1 }, to: { opacity: 0 } });

const duration = 300;

const baseStyle = {
	w: '100%',
	h: '100%',
	bgSize: 'cover',
	bgRepeat: 'no-repeat',
	bgColor: colors.spaceBlue,
	bgPos: 'center',
	top: 0,
	left: 0,
	zIndex: 1,
};

const transitionStyles = {
	entering: { opacity: 0, sx: { animation: `${fadeIn} ${duration}ms linear` } },
	entered: { opacity: 1 },
	exiting: { opacity: 1, sx: { animation: `${fadeOut} ${duration * 0.8}ms ease-in` } },
	exited: { opacity: 0 },
	unmounted: {},
};

export const Background: FC<BackgroundProps> = ({ currentPath }) => {
	const bgUrl = `url('/images${currentPath}bg.jpeg')`;

	return (
		<SwitchTransition mode="in-out">
			<Transition key={bgUrl} timeout={duration}>
				{(state) => <Box {...baseStyle} pos="absolute" bgImg={bgUrl} {...transitionStyles[state]} />}
			</Transition>
		</SwitchTransition>
	);
};
