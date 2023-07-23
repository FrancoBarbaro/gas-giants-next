import { FC, useContext } from 'react';
import { GasGiant } from '~/common/types';
import { PlanetPageContent } from '~/components/planet-page/planet-page-content';
import { PlanetPageSkeleton } from '~/components/planet-page/planet-page-skeleton';
import { FirebaseContext } from '~/context/firebase-context';
import { useFetchPlanetInfo } from '~/hooks/use-fetch-planet-info';

type PlanetPageProps = {
	planet: GasGiant;
};

export const PlanetPage: FC<PlanetPageProps> = ({ planet }) => {
	const { authToken, appCheckToken } = useContext(FirebaseContext);
	const { data } = useFetchPlanetInfo(planet, authToken, appCheckToken);

	// TODO: have a SwitchTransition here
	// return <PlanetPageSkeleton planet={planet} />;
	return data ? <PlanetPageContent planet={planet} info={data} /> : <PlanetPageSkeleton planet={planet} />;
};
