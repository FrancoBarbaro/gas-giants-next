import {
	Box,
	Button,
	Checkbox,
	CheckboxGroup,
	FormControl,
	FormLabel,
	HStack,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverHeader,
	PopoverTrigger,
	Radio,
	RadioGroup,
	Stack,
	Text,
	Textarea,
	useDisclosure,
	useToast,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ChangeEvent, FC, useContext } from 'react';
import { dynamicFontSize } from '~/common/dynamic-values';
import { FeedbackContext } from '~/context/feedback-context';
import { useStoreUserFeedback } from '~/hooks/use-store-user-feedback';
import { colors } from '~/theme/colors';

export const FeedbackPage: FC = () => {
	const { isOpen: alertDialogIsOpen, onToggle: toggleAlertDialog, onClose: closeAlertDialog } = useDisclosure();
	const { hasSubmittedFeedback, setHasSubmittedFeedback } = useContext(FeedbackContext);
	const router = useRouter();
	const toast = useToast();
	const {
		likedWebsite,
		favoritePages,
		additionalFeedback,
		setLikedWebsite,
		setFavoritePages,
		setAdditionalFeedback,
		storeUserFeedback,
	} = useStoreUserFeedback();

	const submitHandler = (event: ChangeEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!likedWebsite || !favoritePages.length || !additionalFeedback) {
			toggleAlertDialog();
			return;
		}

		const feedbackStoredPromise = storeUserFeedback();

		toast.promise(feedbackStoredPromise, {
			success: {
				title: 'Feedback recieved!',
				description: 'Thank you for your feedback!',
				duration: 4000,
			},
			error: {
				title: 'Something went wrong!',
				description: 'An error occured while submitting your feedback. Please try again.',
				duration: 4000,
			},
			loading: {
				title: 'Submitting feedback...',
			},
		});

		setLikedWebsite('');
		setFavoritePages([]);
		setAdditionalFeedback('');
		setHasSubmittedFeedback(true);
		router.replace('/home');
	};

	return (
		<Box w={{ base: '90%', md: 'fit-content' }}>
			{!hasSubmittedFeedback && (
				<form id="feedback" onSubmit={submitHandler}>
					<FormControl
						as="fieldset"
						color={colors.white}
						bg={colors.bluePurpleTranslucent}
						p={{ base: 6, md: 8, lg: 10, xxl: 16 }}
						borderRadius={{ base: 'lg', xs: 10, sm: 'xl', md: 14, lg: '2xl', xxl: 20 }}
						borderWidth={{ base: 1, xxl: 2 }}
						borderColor={colors.whiteTranslucent}
					>
						<Stack spacing={{ base: 5, md: 7, lg: 8, xxl: 12 }}>
							<Stack spacing={0.5}>
								<FormLabel as="legend" fontSize={dynamicFontSize}>
									Did you like this website?
								</FormLabel>
								<RadioGroup value={likedWebsite} onChange={setLikedWebsite}>
									<HStack spacing={{ base: 6, xs: 8, sm: 6, xxl: 10 }}>
										<Radio value="Yes">
											<Text fontSize={dynamicFontSize}>Yes</Text>
										</Radio>
										<Radio value="No">
											<Text fontSize={dynamicFontSize}>No</Text>
										</Radio>
										<Radio value="Kind Of">
											<Text fontSize={dynamicFontSize}>Kind Of</Text>
										</Radio>
									</HStack>
								</RadioGroup>
							</Stack>
							<Stack spacing={0.5}>
								<FormLabel as="legend" fontSize={dynamicFontSize}>
									Which page was your favorite?
								</FormLabel>
								<CheckboxGroup value={favoritePages} onChange={setFavoritePages}>
									<Stack direction={{ base: 'column', sm: 'row' }} spacing={{ base: 3, sm: 6 }}>
										<HStack spacing={{ base: 7, xs: 9, sm: 6, xxl: 12 }}>
											<Checkbox value="Home">
												<Text fontSize={dynamicFontSize}>Home</Text>
											</Checkbox>
											<Checkbox value="Jupiter">
												<Text fontSize={dynamicFontSize}>Jupiter</Text>
											</Checkbox>
											<Checkbox value="Saturn">
												<Text fontSize={dynamicFontSize}>Saturn</Text>
											</Checkbox>
										</HStack>
										<HStack spacing={{ base: '21.5px', xs: '29.5px', sm: 6, xxl: 12 }}>
											<Checkbox value="Uranus">
												<Text fontSize={dynamicFontSize}>Uranus</Text>
											</Checkbox>
											<Checkbox value="Neptune">
												<Text fontSize={dynamicFontSize}>Neptune</Text>
											</Checkbox>
										</HStack>
									</Stack>
								</CheckboxGroup>
							</Stack>
							<Stack spacing={0.5}>
								<FormLabel as="legend" fontSize={dynamicFontSize}>
									Additional Feedback:
								</FormLabel>
								<Textarea
									h={{ base: 32, xs: 40, sm: 48, xxl: 72 }}
									resize="none"
									fontSize={dynamicFontSize}
									placeholder="Tell us more about what you liked about the website or suggest a way that the site may be improved."
									value={additionalFeedback}
									onChange={(event) => setAdditionalFeedback(event.target.value)}
									_placeholder={{ color: colors.lightGray }}
								/>
							</Stack>
							<Popover
								returnFocusOnClose={false}
								isOpen={alertDialogIsOpen}
								onClose={closeAlertDialog}
								placement="top"
								closeOnBlur={false}
							>
								<PopoverTrigger>
									<Button
										h={{ base: 10, xxl: 14 }}
										color={colors.bluePurple}
										bg={colors.white}
										fontSize={dynamicFontSize}
										form="feedback"
										type="submit"
									>
										Submit Feedback
									</Button>
								</PopoverTrigger>
								<PopoverContent
									bg={colors.magentaPurple}
									fontSize={dynamicFontSize}
									w={{ base: 64, md: 80, xxl: '25em' }}
								>
									<PopoverHeader>Empty Fields</PopoverHeader>
									<PopoverArrow bg={colors.magentaPurple} />
									<PopoverCloseButton />
									<PopoverBody>You must fill out all fields before submitting the feedback form.</PopoverBody>
								</PopoverContent>
							</Popover>
						</Stack>
					</FormControl>
				</form>
			)}
			{hasSubmittedFeedback && <Text color={colors.neonPink}>Thank you for your feedback!</Text>}
		</Box>
	);
};
