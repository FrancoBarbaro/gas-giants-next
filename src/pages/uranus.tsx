import type { NextPage } from 'next';
import Head from 'next/head';
import { PlanetPage } from '../components/planet-page';

const UranusPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Uranus</title>
				<meta name="description" content="Information about the planet Uranus" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<PlanetPage planet="uranus" bg="url('/images/uranusbg.jpeg')" />
		</>
	);
};

export default UranusPage;
