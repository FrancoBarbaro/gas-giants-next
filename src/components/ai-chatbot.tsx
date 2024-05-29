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

	// TODO: add a loading spinner when the chatbot is fetching a response
	// TODO: maybe use an auto resize textarea for the chatbot
	// TODO: maybe add a character limit to the chatbot
	// TODO: maybe replace galactic purple with blue purple everywhere
	// TODO: make sure the dynamic styling for the chatbot is consistent with the rest of the app
	/* TODO: right now when feedback is submitted, a redirect happens and the link
	to the feedback page is no longer in the footer, should it be this way or should I
	keep the page available but put a submitted screen? */
	return (
		<FormControl
			as="form"
			h="100%"
			minH={96}
			color={colors.white}
			borderRadius={dynamicBorderRadius}
			border={`1px solid ${colors.lightGrayTranslucent}`}
			overflow="hidden"
			onSubmit={submitHandler}
		>
			<Textarea
				h="90%"
				minH="90%"
				px={3}
				py={1.5}
				bg={colors.bluePurpleTranslucent}
				value={answer}
				resize="none"
				variant="unstyled"
				fontSize={dynamicFontSize}
				borderRadius="none"
				borderBottom={`1px solid ${colors.lightGrayTranslucent}`}
				readOnly
			/>
			<HStack spacing={0} h="10%">
				<Input
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
					onChange={(event) => setPrompt(event.target.value)}
					_placeholder={{ color: colors.lightGrayTranslucent }}
				/>
				<Button
					w="15%"
					h="100%"
					type="submit"
					fontSize={dynamicFontSize}
					borderRadius="none"
					disabled={!validPrompt || !isReady}
					bg={colors.white}
					color={colors.bluePurple}
					borderLeft={`1px solid ${colors.lightGrayTranslucent}`}
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
