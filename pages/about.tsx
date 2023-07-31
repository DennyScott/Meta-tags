import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Head>
        <meta property="og:title" content="Denny's awesome Site" />
        <meta
          property="og:image"
          content="https://hips.hearstapps.com/hmg-prod/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=1.00xw:0.756xh;0,0.0756xh&resize=1200:*"
        />
        <meta
          property="og:description"
          content="Something in here that gives a decent description length when we are testing it out."
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div>About us</div>
    </>
  );
}
