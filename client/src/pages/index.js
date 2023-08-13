import Head from "next/head";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Posaak - An ecommerce clothing platform</title>
        <meta
          name="description"
          content="The best ecommerce clothing platform in the market here in Nepal"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={rubik.className}>
        <div>Hello World</div>
      </main>
    </>
  );
}
