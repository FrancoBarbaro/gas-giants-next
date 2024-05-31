import { Button, FormControl, HStack, Input, Textarea } from '@chakra-ui/react';
import { FC, FormEvent, useState } from 'react';
import { dynamicBorderRadius, dynamicFontSize } from '~/common/dynamic-values';
import { AiChatbotSpinner } from '~/components/ai-chatbot-spinner';
import { useFetchAiResponse } from '~/hooks/use-fetch-ai-response';
import { colors } from '~/theme/colors';

export const AiChatbot: FC = () => {
	const [prompt, setPrompt] = useState('');
	const { fetchAiResponse, answer, isReady } = useFetchAiResponse();

	const validPrompt = prompt.trim() !== '';

	const submitHandler = (event: FormEvent<HTMLDivElement>) => {
		event.preventDefault();
		if (validPrompt && isReady) {
			fetchAiResponse(prompt);
			setPrompt('');
		}
	};

	return (
		<FormControl
			as="form"
			h="100%"
			minH={{ base: 72, md: 96 }}
			color={colors.white}
			borderRadius={dynamicBorderRadius}
			borderWidth={{ base: 1, xxl: 2 }}
			borderColor={colors.whiteTranslucent}
			overflow="hidden"
			onSubmit={submitHandler}
		>
			<Textarea
				id="ai-chatbot-answer"
				h={{ base: '90%', xs: '85%', md: '90%' }}
				minH={{ base: '90%', xs: '85%', md: '90%' }}
				px={3}
				py={2}
				zIndex={4} // prevents form background from appearing above bottom border
				bg={colors.bluePurpleTranslucent}
				value={answer}
				resize="none"
				variant="unstyled"
				fontSize={dynamicFontSize}
				borderRadius="none"
				borderBottomWidth={{ base: 1, xxl: 2 }}
				borderColor={colors.whiteTranslucent}
				readOnly
			/>
			<HStack spacing={0} h={{ base: '10%', xs: '15%', md: '10%' }} minH={{ base: '10%', xs: '15%', md: '10%' }}>
				<Input
					id="ai-chatbot-prompt"
					h="100%"
					minH="100%"
					px={3}
					py={1.5}
					bg={colors.bluePurpleTranslucent}
					variant="unstyled"
					placeholder="Ask a question"
					fontSize={dynamicFontSize}
					borderRadius="none"
					type="text"
					value={prompt}
					autoComplete="off" // prevents browser from suggesting previous inputs
					data-lpignore="true" // prevents LastPass from autofilling
					data-1p-ignore="true" // prevents 1Password from autofilling
					onChange={(event) => setPrompt(event.target.value)}
					_placeholder={{ color: colors.lightGray }}
				/>
				<Button
					w="15%"
					h="100%"
					zIndex={4} // prevents form background from appearing above left border
					type="submit"
					fontSize={dynamicFontSize}
					borderRadius="none"
					// TODO: change this back when done testing
					// isLoading={!isReady}
					isLoading={true}
					spinner={<AiChatbotSpinner />}
					disabled={!validPrompt || !isReady}
					bg={colors.white}
					color={colors.bluePurple}
					borderLeftWidth={{ base: 1, xxl: 2 }}
					borderColor={colors.whiteTranslucent}
					_disabled={{
						bg: colors.whiteTranslucent,
						cursor: 'not-allowed',
						_active: { bg: colors.whiteTranslucent, color: colors.bluePurple },
					}}
					_hover={{ bg: colors.whiteTranslucent, color: colors.bluePurple }}
				>
					Ask
				</Button>
			</HStack>
		</FormControl>
	);
};
