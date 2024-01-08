import { useCheckboxGroup, useRadioGroup } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { FirebaseContext } from '~/context/firebase-context';

export const useStoreUserFeedback = () => {
	const { authToken, appCheckToken, userId } = useContext(FirebaseContext);
	const { value: likedWebsite, setValue: setLikedWebsite } = useRadioGroup({ defaultValue: '' });
	const { value: favoritePages, setValue: setFavoritePages } = useCheckboxGroup({ defaultValue: [] });
	const [additionalFeedback, setAdditionalFeedback] = useState('');

	const storeUserFeedback = async () => {
		if (!authToken || !appCheckToken || !userId) {
			throw new Error('Request did not include the required credentials!');
		}

		const res = await fetch('/api/feedback/store-feedback', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${authToken}`,
				'X-Firebase-AppCheck': appCheckToken,
				'X-Firebase-UID': userId,
			},
			body: JSON.stringify({ likedWebsite, favoritePages, additionalFeedback }),
		});

		if (!res.ok) {
			throw new Error(res.statusText);
		}

		return true;
	};

	return {
		likedWebsite,
		favoritePages,
		additionalFeedback,
		setLikedWebsite,
		setFavoritePages,
		setAdditionalFeedback,
		storeUserFeedback,
	};
};
