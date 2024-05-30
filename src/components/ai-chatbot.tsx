import { Button, FormControl, HStack, Input, Textarea } from '@chakra-ui/react';
import { FC, FormEvent, useState } from 'react';
import { dynamicBorderRadius, dynamicFontSize } from '~/common/dynamic-values';
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

	// TODO: fix bug where typing cursor is one character behind
	// TODO: either zoom out after mobile zoom in or prevent zoom in

	return (
		<FormControl
			as="form"
			h="100%"
			minH={{ xxs: 72, md: 96 }}
			color={colors.white}
			borderRadius={dynamicBorderRadius}
			borderWidth={{ xxs: 1, xxl: 2 }}
			borderColor={colors.whiteTranslucent}
			overflow="hidden"
			onSubmit={submitHandler}
		>
			<Textarea
				id="ai-chatbot-answer"
				h={{ xxs: '90%', xs: '85%', md: '90%', xxl: '85%' }}
				minH={{ xxs: '90%', xs: '85%', md: '90%', xxl: '85%' }}
				px={3}
				py={1.5}
				bg={colors.bluePurpleTranslucent}
				value={answer}
				resize="none"
				variant="unstyled"
				fontSize={dynamicFontSize}
				borderRadius="none"
				borderBottomWidth={{ xxs: 1, xxl: 2 }}
				borderColor={colors.whiteTranslucent}
				readOnly
			/>
			<HStack
				spacing={0}
				h={{ xxs: '10%', xs: '15%', md: '10%', xxl: '15%' }}
				minH={{ xxs: '10%', xs: '15%', md: '10%', xxl: '15%' }}
			>
				<Input
					id="ai-chatbot-prompt"
					h="100%"
					minH="100%"
					px={3}
					py={1.5}
					bg={colors.bluePurpleTranslucent}
					variant="unstyled"
					placeholder="Ask a question"
					fontSize="16px"
					borderRadius="none"
					type="text"
					value={prompt}
					autoComplete="new-password" // workaround to prevent autofill from password managers
					onChange={(event) => setPrompt(event.target.value)}
					_placeholder={{ color: colors.whiteTranslucent }}
				/>
				<Button
					w="15%"
					h="100%"
					type="submit"
					fontSize={dynamicFontSize}
					borderRadius="none"
					isLoading={!isReady}
					// TODO: install react-spinners and use BeatLoader
					// spinner={<BeatLoader size={8} color={colors.bluePurple} />}
					disabled={!validPrompt || !isReady}
					bg={colors.white}
					color={colors.bluePurple}
					borderLeftWidth={{ xxs: 1, xxl: 2 }}
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
