import type { NextPage } from 'next';
import Head from 'next/head';
import { PlanetPage } from '../components/planet-page/planet-page';

const NeptunePage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Neptune</title>
				<meta name="description" content="Information about the planet Neptune" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<PlanetPage planet="neptune" />
		</>
	);
};

export default NeptunePage;
