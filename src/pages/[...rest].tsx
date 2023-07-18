import type { NextPage } from 'next';

export const Custom404: NextPage = () => null;

export const getServerSideProps: () => Promise<any> = async () => {
	return { redirect: { destination: '/home', permanent: true } };
};

export default Custom404;
