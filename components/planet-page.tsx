import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";

type PlanetPageProps = {
  bg: string;
};

export const PlanetPage: FC<PlanetPageProps> = ({ bg }) => (
  <Box bg={bg}>
    <Text>Planet!</Text>
  </Box>
);
