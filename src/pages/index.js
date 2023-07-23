import Hero from "@/components/Hero";
import Head from "next/head";
import styles from "@/styles/Home.module.scss"
import ShowsCard from "@/components/ShowsCard";
import CommentSection from "@/components/CommentSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mishap</title>
        <meta name="Mishap" content="“Il sito ufficiale di Emanuele Pantano, comico e attore. Scopri le sue date, i suoi video e i suoi spettacoli." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/microphone.png"  />
      </Head>
      <div className={styles.Home}>
   

          <Hero/>
          <ShowsCard/>
       

      </div>
    </>
  );
}
