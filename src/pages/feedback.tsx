import type { NextPage } from 'next';
import Head from 'next/head';
import { FeedbackPage } from '../components/feedback-page';

const Feedback: NextPage = () => (
	<>
		<Head>
			<title>Feedback</title>
			<meta name="description" content="A form for user feedback" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<FeedbackPage />
	</>
);

export default Feedback;
