import { Box, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>The Gas Giants</title>
        <meta
          name="description"
          content="Information about our solar system's Gas Giants"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box bg="url('/images/indexbg.jpeg')" w="100vw" h="100vh" zIndex={1}>
        <Text
          as="h1"
          color="aquamarine"
          zIndex={2}
          fontWeight="semibold"
          fontSize={24}
        >
          Home
        </Text>
      </Box>
    </>
  );
};

export default Home;
