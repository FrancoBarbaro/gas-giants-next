import type { NextPage } from 'next';

export const getStaticProps = () => ({
	redirect: {
		destination: '/home',
		permanent: true,
	},
	props: {},
});

const Index: NextPage = () => null;

export default Index;
