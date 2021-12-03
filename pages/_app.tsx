import "../styles/index.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import React from "react";
import { AnimatePresence } from "framer-motion";

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Layout>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </AnimatePresence>
    </>
  );
};

export default App;
