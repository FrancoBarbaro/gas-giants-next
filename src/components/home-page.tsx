import { AspectRatio, Stack, VStack } from '@chakra-ui/react';
import type { FC } from 'react';
import { AiChatbot } from '~/components/ai-chatbot';
import { FlipCard } from '~/components/flip-card/flip-card';
import { RoundedTextBox } from '~/components/rounded-box/rounded-text-box';

const dynamicMarginBottom = { xxs: 0, sm: 1, md: 2 };

// TODO: complete this page
export const HomePage: FC = () => {
	return (
		<Stack spacing={{ xxs: 6, md: 20 }} direction={{ xxs: 'column', md: 'row' }} w="100%" h="100%">
			<VStack w={{ xxs: '100%', md: '50%' }} h="100%" justifyContent="space-between" spacing={6}>
				<VStack as="section" alignItems="initial" w="100%">
					<RoundedTextBox textType="h1" mb={dynamicMarginBottom}>
						What is a Gas Giant?
					</RoundedTextBox>
					<RoundedTextBox textType="p">
						A gas giant is a large planet mostly composed of helium and/or hydrogen. They don&apos;t have hard surfaces
						and instead have swirling gases above a solid core. There are four gas giants in our solar system: Jupiter,
						Saturn, Uranus, and Neptune.
					</RoundedTextBox>
				</VStack>
				<VStack as="section" alignItems="initial" w="100%">
					<AspectRatio ratio={480 / 274} w="100%">
						<FlipCard imageUrl="images/interiors.jpeg" imageDesc="dummy" imageAltText="dummy" />
					</AspectRatio>
				</VStack>
			</VStack>
			<VStack w={{ xxs: '100%', md: '50%' }} h="100%" as="section" alignItems="initial">
				<RoundedTextBox textType="h2" mt={{ xxs: 0, md: 0.5, lg: 1, xl: 1.5, xxl: 3 }} mb={dynamicMarginBottom}>
					AI Chatbot:
				</RoundedTextBox>
				<AiChatbot />
			</VStack>
		</Stack>
	);
};
