import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { colors } from '~/common/colors';

type BackgroundProps = {
	img: string;
};

export const Background: FC<BackgroundProps> = ({ img }) => (
	<Box
		w="100%"
		h="100%"
		bgSize="cover"
		bgRepeat="no-repeat"
		bgColor={colors.spaceBlue}
		bgImg={img}
		bgPos="center"
		pos="absolute"
		top={0}
		left={0}
		zIndex={1}
	/>
);
