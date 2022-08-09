import useSWR from 'swr';
// import { MobileDeviceData } from "~/common/types/device";

export const useFetchSomething = (someParam: any) => {
	// TODO: have this request to an endpoint in the api folder which requests to firebase for the info
	// TODO: firebase might return an object something like:
	type firebaseReturnObj = {
		facts: string[];
		image: string;
		imageDesc: string;
		symbol: string;
		symbolDesc: string;
	};
	// use zod to validate this object

	// const { data, error } = useSWR<MobileDeviceData[]>(
	//   orgId ? `/api/organization/${orgId}/devices` : null
	// );

	// return { data, error, isLoading: !data && !error };

	return;
};
