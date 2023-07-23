import ShowsSection from "@/components/ShowsSection";
import Head from "next/head";
const Shows = ()=>{
    return (
    <>
     <Head>
        <title>Mishap Show</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/microphone.png"   />
      </Head>
      <div>
      <ShowsSection/>
      </div>
      
    </>
    )
}

export default Shows
