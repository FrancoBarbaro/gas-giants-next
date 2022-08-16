import type { NextPage } from 'next';
import Head from 'next/head';
import { PlanetPage } from '../components/planet-page';

const JupiterPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Jupiter</title>
				<meta name="description" content="Information about the planet Jupiter" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<PlanetPage planet="jupiter" />
		</>
	);
};

export default JupiterPage;

// TODO: maybe opt for this approach
// import { NextPage } from 'next';

// const Page: NextPage<JupiterPageProps> = JupiterPage;

// export default Page;
