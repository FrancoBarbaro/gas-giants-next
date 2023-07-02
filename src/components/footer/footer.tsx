import { Text } from '@chakra-ui/react';
import type { FC } from 'react';
import { FooterContainer } from '~/components/footer/footer-container';
import { PageLink } from '~/components/page-link';

export const Footer: FC = () => (
	<FooterContainer>
		<Text textAlign="center">&copy; Franco Barbaro 2022. All Rights Reserved.</Text>
		<PageLink href="/feedback" variant="gradient-underline">
			Feedback
		</PageLink>
	</FooterContainer>
);
