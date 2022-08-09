import { Skeleton, Stack, Text } from '@chakra-ui/react';
import type { FC } from 'react';
import { ContentWrapper } from '~/components/layout/content-wrapper';

const SkeletonLayout: FC = () => (
	<Stack>
		<Skeleton />
	</Stack>
);

export const HomePage: FC = () => (
	<ContentWrapper bg="url('/images/indexbg.jpeg')">
		<Text as="h3" color="pink">
			Content
		</Text>
	</ContentWrapper>
);
