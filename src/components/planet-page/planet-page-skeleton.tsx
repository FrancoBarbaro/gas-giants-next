import { AspectRatio, Skeleton, VStack } from '@chakra-ui/react';
import type { FC } from 'react';
import { RoundedTextBox } from '~/components/rounded-box/rounded-text-box';

type PlanetPageSkeletonProps = {
	planet: string;
};

// TODO: responsiveness improvements list:
// 1. If width is too small, make buttons smaller (decrease width, font size) to allow for space between them ✅
// 2. Make the text in the footer be able to shift in position so it is never at the edge of the footer and never
//		has to wrap to a new line, also decrease font size if necessary. ✅
// 4. For small devices such as iPhones, the site must be scrollable, but for bigger ones it must not be scrollable ✅
// 5. Make headers resize nicer when screen gets smaller (also, consider changing the first header to be the same size
//		as the others)
// 6. Main issue: each planet has a different amount of text for each section, so they will be different in size,
//		so how do i make a generalized skeleton layout? this may be a non-issue as the loading will be quite fast
// 7. For very small devices the sections should all stack vertically, so the fun facts section would be below the symbol section

export const PlanetPageSkeleton: FC<PlanetPageSkeletonProps> = ({ planet }) => (
	<>
		<VStack mr={{ xxs: 0, md: 10 }} w={{ xxs: '100%', md: '50%' }} h="100%" justifyContent="space-between">
			<VStack as="section" alignItems="initial" w="100%" mb={6}>
				<RoundedTextBox textType="h1" mb={2}>{`About ${planet}:`}</RoundedTextBox>
				<Skeleton w="100%" h={56} borderRadius={15} />
			</VStack>
			<VStack as="section" alignItems="initial" w="100%">
				<RoundedTextBox textType="h2" mb={2}>
					Symbol:
				</RoundedTextBox>
				<Skeleton w="100%" h={32} borderRadius={15} />
			</VStack>
		</VStack>
		<VStack
			ml={{ xxs: 0, md: 10 }}
			mt={{ xxs: 8, md: 0 }}
			w={{ xxs: '100%', md: '50%' }}
			h="100%"
			justifyContent="space-between"
		>
			<VStack as="section" alignItems="initial" w="100%">
				<RoundedTextBox textType="h2" mt={1} mb={3}>
					Fun Facts:
				</RoundedTextBox>
				<Skeleton w="100%" h={56} borderRadius={15} />
			</VStack>
			<VStack as="section" alignItems="initial" w="100%">
				<AspectRatio ratio={480 / 219} w="100%">
					<Skeleton w="100%" borderRadius={15} />
				</AspectRatio>
			</VStack>
		</VStack>
	</>
);
