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

      <h1>Home</h1>
    </>
  );
};

export default Home;
