import type { NextPage } from 'next';
import Head from 'next/head';
import { HomePage } from '../components/home-page';

const Home: NextPage = () => (
	<>
		<Head>
			<title>The Gas Giants</title>
			<meta name="description" content="Information about our solar system's Gas Giants" />
			<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
			<meta property="og:title" content="The Gas Giants" />
			<meta property="og:description" content="Information about our solar system's Gas Giants" />
			<meta property="og:image" content="/images/homebg.jpeg" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<HomePage />
	</>
);

export default Home;
