import { Stack, VStack } from '@chakra-ui/react';
import type { FC } from 'react';
import { dynamicMarginBottom } from '~/common/dynamic-values';
import { AiChatbot } from '~/components/ai-chatbot';
import { RoundedTextBox } from '~/components/rounded-box/rounded-text-box';

export const HomePage: FC = () => {
	return (
		<Stack spacing={{ xxs: 6, md: 20 }} direction={{ xxs: 'column', md: 'row' }} w="100%" h="100%">
			<VStack w={{ xxs: '100%', md: '50%' }} h="100%" justifyContent="space-between" spacing={{ xxs: 6, md: 24 }}>
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
					<RoundedTextBox textType="h2" mb={dynamicMarginBottom}>
						About our AI Chatbot:
					</RoundedTextBox>
					<RoundedTextBox textType="p">
						Our AI chatbot is a fun way to learn about the gas giants. It is powered by the OpenAI GPT-3.5 Turbo API and
						is able to answer questions about the gas giants. Try asking it about the gas giants&apos; atmospheres or
						moons!
					</RoundedTextBox>
				</VStack>
			</VStack>
			<VStack w={{ xxs: '100%', md: '50%' }} h="100%" as="section" alignItems="initial">
				<RoundedTextBox textType="h2" mb={dynamicMarginBottom}>
					AI Chatbot:
				</RoundedTextBox>
				<AiChatbot />
			</VStack>
		</Stack>
	);
};
