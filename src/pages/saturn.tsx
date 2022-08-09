import type { NextPage } from 'next';
import Head from 'next/head';
import { PlanetPage } from '../components/planet-page';

const SaturnPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Saturn</title>
				<meta name="description" content="Information about the planet Saturn" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<PlanetPage planet="saturn" bg="url('/images/saturnbg.jpeg')" />
		</>
	);
};

export default SaturnPage;
