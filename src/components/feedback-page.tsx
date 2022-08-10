import { Box, Center, Skeleton, Stack, Text } from '@chakra-ui/react';
import type { FC } from 'react';
import { colors } from '~/common/colors';

const SkeletonLayout: FC = () => (
	<Stack>
		<Skeleton />
	</Stack>
);

export const FeedbackPage: FC = () => (
	<>
		<Center as="main" w="75%" maxW="60rem" pos="relative" zIndex={2}>
			<Text as="h3" color="pink">
				Content
			</Text>
		</Center>
		{/* TODO: make this a component and portal it to be the last thing in the next js div in the dom */}
		<Box
			w="100%"
			h="100%"
			bgSize="100%"
			bgColor={colors.spaceBlue}
			bgImg="url('/images/feedbackbg.jpeg')"
			bgPos="center"
			pos="absolute"
			top={0}
			left={0}
			zIndex={1}
		/>
	</>
);
