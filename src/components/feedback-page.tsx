import {
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

	// TODO: give the form responsive styling
	return (
		<>
			{!hasSubmittedFeedback && (
				<form id="feedback" onSubmit={submitHandler}>
					<FormControl
						as="fieldset"
						color={colors.white}
						bg={colors.bluePurple}
						opacity={0.85}
						p={10}
						borderRadius="lg"
					>
						<Stack spacing={7}>
							<Stack spacing={0.5}>
								<FormLabel as="legend">Did you like this website?</FormLabel>
								<RadioGroup value={likedWebsite} onChange={setLikedWebsite}>
									<HStack spacing={6}>
										<Radio value="Yes">Yes</Radio>
										<Radio value="No">No</Radio>
										<Radio value="Kind Of">Kind Of</Radio>
									</HStack>
								</RadioGroup>
							</Stack>
							<Stack spacing={0.5}>
								<FormLabel as="legend">Which page was your favorite?</FormLabel>
								<CheckboxGroup value={favoritePages} onChange={setFavoritePages}>
									<HStack spacing={6}>
										<Checkbox value="Home">Home</Checkbox>
										<Checkbox value="Jupiter">Jupiter</Checkbox>
										<Checkbox value="Saturn">Saturn</Checkbox>
										<Checkbox value="Uranus">Uranus</Checkbox>
										<Checkbox value="Neptune">Neptune</Checkbox>
									</HStack>
								</CheckboxGroup>
							</Stack>
							<Stack spacing={0.5}>
								<FormLabel as="legend">Additional Feedback:</FormLabel>
								<Textarea
									h={48}
									resize="none"
									placeholder="Tell us more about what you liked about the website or suggest a way that the site may be improved."
									value={additionalFeedback}
									onChange={(event) => setAdditionalFeedback(event.target.value)}
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
									<Button color={colors.bluePurple} bg={colors.white} form="feedback" type="submit">
										Submit Feedback
									</Button>
								</PopoverTrigger>
								<PopoverContent bg={colors.magentaPurple}>
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
		</>
	);
};
