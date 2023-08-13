import "@/styles/globals.css";
import "@/components/Layout";
import Layout from "@/components/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Posaak - A best clothing ecommerce store</title>
        <meta
          name="description"
          content="Posaak - The best ecommerce platform in Nepal."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
