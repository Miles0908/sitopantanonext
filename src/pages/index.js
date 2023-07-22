import Hero from "@/components/Hero";
import Head from "next/head";
import styles from "../styles/Home.module.scss"
import ShowsCard from "@/components/ShowsCard";
import CommentSection from "@/components/CommentSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.Home}>

          <Hero/>
          <ShowsCard/>
          <CommentSection/>
      </div>
    </>
  );
}
