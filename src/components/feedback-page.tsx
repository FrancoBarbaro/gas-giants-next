import { Center, Skeleton, Stack, Text } from '@chakra-ui/react';
import type { FC } from 'react';
import { Background } from '~/components/layout/background';

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
		<Background img="url('/images/feedbackbg.jpeg')" />
	</>
);
