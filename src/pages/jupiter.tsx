import type { NextPage } from 'next';
import Head from 'next/head';
import { PlanetPage } from '../components/planet-page/planet-page';

// TODO: see if the head can be moved into the planet page component and generalized (check it's place in the dom), PageHead component maybe?
const JupiterPage: NextPage = () => (
	<>
		<Head>
			<title>Jupiter</title>
			<meta name="description" content="Information about the planet Jupiter" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<PlanetPage planet="jupiter" />
	</>
);

export default JupiterPage;
