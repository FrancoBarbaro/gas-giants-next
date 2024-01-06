import type { NextPage } from 'next';
import Head from 'next/head';
import { FeedbackPage } from '../components/feedback-page';

const Feedback: NextPage = () => {
	const pageTitle = 'Feedback - The Gas Giants';

	return (
		<>
			<Head>
				<title>{pageTitle}</title>
				<meta name="description" content="A form for user feedback" />
				<meta property="og:title" content="Feedback" />
				<meta property="og:description" content="A form for user feedback" />
				<meta property="og:image" content="url('/images/feedbackbg.jpeg')" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<FeedbackPage />
		</>
	);
};

export default Feedback;
