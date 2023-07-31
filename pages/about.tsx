import Head from "next/head";
import { useEffect, useState } from "react";

const fetchPhotos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await response.json();
  return data as Photo[];
};

type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export default function AboutPage() {
  const [images, setImages] = useState<Photo[]>();
  useEffect(() => {
    fetchPhotos().then((data) => {
      setImages(data);
    });
  }, []);
  return (
    <>
      <Head>
        <meta property="og:title" content="Denny's awesome Site" />
        <meta property="og:image" content={images && images[0]?.url} />
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
