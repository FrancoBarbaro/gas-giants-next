import { createContext, useState, type Dispatch, type FC, type ReactNode, type SetStateAction } from 'react';

type FeedbackContextProviderProps = {
	children: ReactNode;
};

type ContextType = {
	hasSubmittedFeedback: boolean;
	setHasSubmittedFeedback: Dispatch<SetStateAction<boolean>>;
};

export const FeedbackContext = createContext<ContextType>({
	hasSubmittedFeedback: false,
	setHasSubmittedFeedback: () => {},
});

export const FeedbackContextProvider: FC<FeedbackContextProviderProps> = ({ children }) => {
	const [hasSubmittedFeedback, setHasSubmittedFeedback] = useState(false);

	return (
		<FeedbackContext.Provider value={{ hasSubmittedFeedback, setHasSubmittedFeedback }}>
			{children}
		</FeedbackContext.Provider>
	);
};
