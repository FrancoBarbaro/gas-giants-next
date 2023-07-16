import { User } from 'firebase/auth';
import useSWR from 'swr';
import { GasGiant, PlanetInfo } from '~/common/types';
import type { UserState } from '~/context/firebase-auth-context';

const fetcher = async (url: RequestInfo, user: UserState) => {
	// TODO: think more about this case where the user is null
	if (!user) return;

	const token = await user.getIdToken();
	const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
	if (!res.ok) {
		throw new Error('An error occurred while fetching the data!');
	}
	return res.json();
};

export const useFetchPlanetInfo = (planet: GasGiant, user: UserState) => {
	const { data } = useSWR<{ info: PlanetInfo }>([`/api/planets/${planet}`, user], fetcher, { errorRetryCount: 2 });
	return { data: data?.info };
};
