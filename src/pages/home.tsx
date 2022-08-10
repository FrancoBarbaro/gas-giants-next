import type { NextPage } from 'next';
import Head from 'next/head';
import { HomePage } from '../components/home-page';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>The Gas Giants</title>
				<meta name="description" content="Information about our solar system's Gas Giants" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<HomePage />
		</>
	);
};

export default Home;
