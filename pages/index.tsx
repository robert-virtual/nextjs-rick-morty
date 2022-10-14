import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { DisplayCharacters } from "./components/DisplayCharacters";


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rick and Morty</title>
        <meta name="description" content="Rick and Morty" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Rick and Morty</h1>
        <DisplayCharacters/>
          {/* styles.card */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://rickandmortyapi.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
           Rick and Morty Api
        </a>
      </footer>
    </div>
  );
};

export default Home;
