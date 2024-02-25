import { AspectRatio, Box, Image } from '@chakra-ui/react';
import type { FC } from 'react';
import { dynamicBorderRadius, dynamicFontSize } from '~/common/dynamic-values';
import { FlipCardCaption } from '~/components/flip-card/flip-card-caption';
import { colors } from '~/theme/colors';

type FlipCardProps = {
	imageDesc: string;
	imageUrl: string;
	imageAltText: string;
};

export const FlipCard: FC<FlipCardProps> = ({ imageDesc, imageUrl, imageAltText }) => (
	<AspectRatio ratio={480 / 219}>
		<Box w="100%" role="group">
			<Box
				w="100%"
				h="100%"
				transition="transform 700ms"
				__css={{ transformStyle: 'preserve-3d' }}
				_groupHover={{ transform: 'rotateY(180deg)' }}
			>
				<Box
					w="100%"
					h="100%"
					pos="absolute"
					borderRadius={dynamicBorderRadius}
					overflow="hidden"
					__css={{ backfaceVisibility: 'hidden' }}
				>
					<Image src={imageUrl} alt={imageAltText} w="100%" h="100%" __css={{ backfaceVisibility: 'hidden' }} />
				</Box>
				<Box
					pos="absolute"
					w="100%"
					h="100%"
					textAlign="center"
					bg={colors.grayBlack}
					color={colors.neptuneBlue}
					transform="rotateY(180deg)"
					borderRadius={dynamicBorderRadius}
					overflow="hidden"
					display="grid"
					placeItems="center"
					fontSize={dynamicFontSize}
					__css={{ backfaceVisibility: 'hidden' }}
				>
					<FlipCardCaption imageDesc={imageDesc} />
				</Box>
			</Box>
		</Box>
	</AspectRatio>
);
