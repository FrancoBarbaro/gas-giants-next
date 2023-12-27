import Head from 'next/head';
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
	const capitalizedPlanetName = planet[0].toUpperCase() + planet.slice(1);

	return (
		<>
			<Head>
				<title>{capitalizedPlanetName}</title>
				<meta name="description" content={`Information about the planet ${capitalizedPlanetName}`} />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{data ? <PlanetPageContent planet={planet} info={data} /> : <PlanetPageSkeleton planet={planet} />}
		</>
	);
};
