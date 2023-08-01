import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { BackgroundImage } from '~/components/background/background-image';
import { ShootingStars } from '~/components/background/shooting-stars';

type BackgroundProps = {
	currentPath: string;
};

export const Background: FC<BackgroundProps> = ({ currentPath }) => (
	<Box pos="absolute" w="100%" h="100%" top={0} left={0}>
		<BackgroundImage currentPath={currentPath} />
		<ShootingStars />
	</Box>
);
