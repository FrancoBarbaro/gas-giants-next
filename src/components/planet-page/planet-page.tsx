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
	const pageTitle = `${capitalizedPlanetName} - The Gas Giants`;
	const pageDescription = `Information about the planet ${capitalizedPlanetName}`;
	const ogImageUrl = `/images/${capitalizedPlanetName.toLowerCase()}bg.jpeg`;

	return (
		<>
			<Head>
				<title>{pageTitle}</title>
				<meta name="description" content={pageDescription} />
				<meta property="og:title" content={capitalizedPlanetName} />
				<meta property="og:description" content={pageDescription} />
				<meta property="og:image" content={ogImageUrl} />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{data ? <PlanetPageContent planet={planet} info={data} /> : <PlanetPageSkeleton planet={planet} />}
		</>
	);
};
