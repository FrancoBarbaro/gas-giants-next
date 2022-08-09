import { extendTheme } from '@chakra-ui/react';
import { colors } from '~/common/colors';
import { Button, Link } from '~/theme/components';
import { fonts } from '~/theme/fonts';

export const theme = extendTheme({
	fonts,
	colors,
	components: {
		Button,
		Link,
	},
});
