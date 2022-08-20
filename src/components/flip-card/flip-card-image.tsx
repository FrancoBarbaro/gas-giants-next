import { Box, Image } from '@chakra-ui/react';
import type { FC } from 'react';

type FlipCardImageProps = {
	imageUrl: string;
	imageAltText: string;
};

export const FlipCardImage: FC<FlipCardImageProps> = ({ imageUrl, imageAltText }) => (
	<Box>
		<Image src={imageUrl} alt={imageAltText} />
	</Box>
);
