import { Skeleton, Stack } from '@chakra-ui/react';
import type { FC } from 'react';
import { GasGiant } from '~/common/types';
import { PlanetPageContent } from '~/components/planet-page/planet-page-content';
import { PlanetPageSkeleton } from '~/components/planet-page/planet-page-skeleton';
import { useFetchPlanetInfo } from '~/hooks/use-fetch-planet-info';

type PlanetPageProps = {
	planet: GasGiant;
};

const SkeletonLayout: FC = () => (
	<Stack>
		<Skeleton />
	</Stack>
);

// TODO: make an endpoint with Next Connect and request to it with the planet's name
// TODO: have a chakra skeleton display while waiting on the request
export const PlanetPage: FC<PlanetPageProps> = ({ planet }) => {
	const { data } = useFetchPlanetInfo(planet);

	return data ? <PlanetPageContent planet={planet} info={data} /> : <PlanetPageSkeleton planet={planet} />;
};

// <Link href={extractedHref} target="_blank" variant="gradient-underline">{extractedText}</Link>
