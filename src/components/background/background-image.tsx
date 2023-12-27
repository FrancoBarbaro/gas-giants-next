import { Box, keyframes } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FC, useRef } from 'react';
import { SwitchTransition, Transition } from 'react-transition-group';
import { colors } from '~/theme/colors';

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
};

const transitionStyles = {
	entering: { opacity: 0, sx: { animation: `${fadeIn} ${duration}ms linear` } },
	entered: { opacity: 1 },
	exiting: { opacity: 1, sx: { animation: `${fadeOut} ${Math.floor(duration * 0.8)}ms ease-in` } },
	exited: { opacity: 0 },
	unmounted: {},
};

const zoom = keyframes({
	'0%': { transform: 'scale(1)' },
	'50%': { transform: 'scale(1.2)' },
	'100%': { transform: 'scale(1)' },
});

type BackgroundImageProps = {
	animated: boolean;
};

export const BackgroundImage: FC<BackgroundImageProps> = ({ animated }) => {
	const { pathname } = useRouter();
	const bgUrl = `url('/images${pathname}bg.jpeg')`;
	const nodeRef = useRef(null);

	return (
		<SwitchTransition mode="in-out">
			<Transition key={bgUrl} timeout={duration} nodeRef={nodeRef}>
				{(state) => (
					<Box
						{...baseStyle}
						pos="absolute"
						bgImg={bgUrl}
						animation={animated ? `${zoom} 30s linear infinite` : undefined}
						ref={nodeRef}
						{...transitionStyles[state]}
					/>
				)}
			</Transition>
		</SwitchTransition>
	);
};
