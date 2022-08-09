import useSWR from 'swr';
// import { MobileDeviceData } from "~/common/types/device";

export const useFetchSomething = (someParam: any) => {
	// TODO: have this request to an endpoint in the api folder which requests to firebase for the info

	// TODO: move this to common/types
	type firebaseReturnObj = {
		planetDesc: string;
		symbolDesc: string;
		funFacts: string[];
		imageUrl: string;
		imageAltText: string;
		imageDesc: string;
	};
	// use zod to validate this object

	// const { data, error } = useSWR<MobileDeviceData[]>(
	//   orgId ? `/api/organization/${orgId}/devices` : null
	// );

	// return { data, error, isLoading: !data && !error };

	return;
};
