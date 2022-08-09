import { Skeleton, Stack, Text } from '@chakra-ui/react';
import type { FC } from 'react';
import { ContentWrapper } from '~/components/layout/content-wrapper';

const SkeletonLayout: FC = () => (
	<Stack>
		<Skeleton />
	</Stack>
);

export const FeedbackPage: FC = () => (
	<ContentWrapper bg="url('/images/feedbackbg.jpeg')">
		<Text as="h3" color="pink">
			Content
		</Text>
	</ContentWrapper>
);
