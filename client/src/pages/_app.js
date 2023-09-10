import "@/styles/globals.css";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import ProgressBar from "@badrap/bar-of-progress";
import { PersistGate } from "redux-persist/integration/react";
import Router from "next/router";

import { persistor, store } from "@/redux/store";
import "@/components/Layout";
import Layout from "@/components/Layout";

const progress = new ProgressBar({
  size: 4,
  color: "#A24857",
  className: "z-50",
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Head>
            <title>Posaak - A best clothing ecommerce store</title>
            <meta
              name="description"
              content="Posaak - The best ecommerce platform in Nepal."
            />
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <Component {...pageProps} />
        </Layout>
        <Toaster
          position="top-right"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 2500,
            },
            error: {
              duration: 3000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
            },
          }}
        />
      </PersistGate>
    </Provider>
  );
}
