import { Skeleton, Stack } from '@chakra-ui/react';
import type { FC } from 'react';
import { SwitchTransition, Transition } from 'react-transition-group';
import { GasGiant } from '~/common/types';
import { PlanetPageContent } from '~/components/planet-page/planet-page-content';
import { PlanetPageSkeleton } from '~/components/planet-page/planet-page-skeleton';
import { useFetchPlanetInfo } from '~/hooks/use-fetch-planet-info';

type PlanetPageProps = {
	planet: GasGiant;
};

export const PlanetPage: FC<PlanetPageProps> = ({ planet }) => {
	const { data } = useFetchPlanetInfo(planet);

	// TODO: have a SwitchTransition here
	return <PlanetPageSkeleton planet={planet} />;
	// return data ? <PlanetPageContent planet={planet} info={data} /> : <PlanetPageSkeleton planet={planet} />;
};
