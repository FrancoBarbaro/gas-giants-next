import { Box, usePrefersReducedMotion } from '@chakra-ui/react';
import type { FC } from 'react';
import { BackgroundImage } from '~/components/background/background-image';
import { ShootingStars } from '~/components/background/shooting-stars';

export const Background: FC = () => {
	const prefersReducedMotion = usePrefersReducedMotion();

	return (
		<Box pos="absolute" w="100%" h="100%" top={0} left={0} zIndex={1}>
			<BackgroundImage animated={!prefersReducedMotion} />
			{!prefersReducedMotion && <ShootingStars />}
		</Box>
	);
};
