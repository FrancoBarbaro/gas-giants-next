import { Skeleton, Stack, Text } from '@chakra-ui/react';
import type { FC } from 'react';
import { ContentWrapper } from '~/components/layout/content-wrapper';

type PlanetPageProps = {
	bg: string;
	planet: 'jupiter' | 'saturn' | 'uranus' | 'neptune';
};

const SkeletonLayout: FC = () => (
	<Stack>
		<Skeleton />
	</Stack>
);

// TODO: make an endpoint with Next Connect and request to it with the planet's name
// TODO: have a chakra skeleton display while waiting on the request
export const PlanetPage: FC<PlanetPageProps> = ({ bg, planet }) => (
	<ContentWrapper bg={bg}>
		{/* TODO: need a ternary here to conditionally display the skeleton... do this in the ContentWrapper or here? */}
		<Text as="h3" color="pink">
			Content
		</Text>
	</ContentWrapper>
);
