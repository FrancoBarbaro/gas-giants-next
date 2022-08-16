import { Center, Skeleton, Stack, Text } from '@chakra-ui/react';
import type { FC } from 'react';

const SkeletonLayout: FC = () => (
	<Stack>
		<Skeleton />
	</Stack>
);

export const HomePage: FC = () => (
	<Center as="main" w="75%" maxW="60rem" pos="relative" zIndex={2}>
		<Text as="h3" color="pink">
			Content
		</Text>
	</Center>
);
