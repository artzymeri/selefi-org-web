import '@/app/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Selefi.org</title>
        <meta
          name="description"
          content="Selefi.org është platforma juaj për të ndjekur dijetarët e sunnetit dhe për të mësuar më shumë për Islamin autentik."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/selefi-org-circle-transparent-navy.png" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://selefi.org/" />
        <meta
          property="og:title"
          content="Selefi.org – Lidhja juaj me dijetarët e sunnetit"
        />
        <meta
          property="og:description"
          content="Mësoni nga dijetarët e sunnetit përmes Selefi.org – një burim i besueshëm për dije islame autentike."
        />
        <meta
          property="og:image"
          content="/selefi-org-circle-transparent-navy.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
