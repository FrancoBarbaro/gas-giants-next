import { Skeleton, Stack, Text } from '@chakra-ui/react';
import type { FC } from 'react';

const SkeletonLayout: FC = () => (
	<Stack>
		<Skeleton />
	</Stack>
);

export const FeedbackPage: FC = () => (
	<Text as="h3" color="pink">
		Content
	</Text>
);
