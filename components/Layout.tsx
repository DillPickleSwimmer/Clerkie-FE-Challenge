import Head from "next/head";
import Navbar from "@/components/Navbar";

import styles from "@/styles/Layout.module.css";

import React from "react";

// Default layout for the site (nav bar to the left of main content)
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Clerkie Frontend Challenge</title>
        <meta
          name="description"
          content="A simple friends filtering application"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.layout}>
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
}
