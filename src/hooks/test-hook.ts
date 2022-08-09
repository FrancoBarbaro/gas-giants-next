import useSWR from 'swr';
import { FirebaseReturnType } from '~/common/types';

export const useFetchSomething = (someParam: any) => {
	// TODO: have this request to an endpoint in the api folder which requests to firebase for the info

	// use zod to validate the object firebase returns

	// const { data, error } = useSWR<MobileDeviceData[]>(
	//   orgId ? `/api/organization/${orgId}/devices` : null
	// );

	// return { data, error, isLoading: !data && !error };

	return;
};
