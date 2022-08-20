import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { FlipCardCaption } from '~/components/flip-card/flip-card-caption';
import { FlipCardImage } from '~/components/flip-card/flip-card-image';

type FlipCardProps = {
	imageDesc: string;
	imageUrl: string;
	imageAltText: string;
};

export const FlipCard: FC<FlipCardProps> = ({ imageDesc, imageUrl, imageAltText }) => (
	<Box>
		<FlipCardImage imageUrl={imageUrl} imageAltText={imageAltText} />
		<FlipCardCaption imageDesc={imageDesc} />
	</Box>
);
