import type { NextPage } from 'next';

export const getStaticProps = () => ({
	redirect: {
		destination: '/home',
		permanent: false,
	},
	props: {},
});

const Index: NextPage = () => null;

export default Index;
