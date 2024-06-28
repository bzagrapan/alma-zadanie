import Head from "next/head";
import "../styles/global.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  //Redirect the starting point of app to /boards by default
  useEffect(() => {
    // Check if the current route is not already /boards
    if (router.asPath !== "/boards") {
      router.push("/boards"); // Redirect to /boards
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Alma-zadanie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="page-wrapper">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
