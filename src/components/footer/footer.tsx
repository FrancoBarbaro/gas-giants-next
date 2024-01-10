import { Text } from '@chakra-ui/react';
import { FC, useContext } from 'react';
import { FooterContainer } from '~/components/footer/footer-container';
import { PageLink } from '~/components/page-link';
import { FeedbackContext } from '~/context/feedback-context';

export const Footer: FC = () => {
	const { hasSubmittedFeedback } = useContext(FeedbackContext);

	return (
		<FooterContainer>
			<Text textAlign="center">&copy; Franco Barbaro 2022. All Rights Reserved.</Text>
			{!hasSubmittedFeedback && (
				<PageLink href="/feedback" variant="gradient-underline">
					Feedback
				</PageLink>
			)}
		</FooterContainer>
	);
};
