import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { Transition } from 'react-transition-group';
import { colors } from '~/common/colors';

export const Background: FC = () => {
	const router = useRouter();
	const bgUrl = `url('/images${router.pathname}bg.jpeg')`;

	return (
		<Transition in={true} timeout={2000}>
			{(state) => (
				<Box
					w="100%"
					h="100%"
					bgSize="cover"
					bgRepeat="no-repeat"
					bgColor={colors.spaceBlue}
					bgImg={bgUrl}
					bgPos="center"
					pos="absolute"
					top={0}
					left={0}
					zIndex={1}
					opacity={state === 'exiting' ? 0 : 1}
				/>
			)}
		</Transition>
	);
};
