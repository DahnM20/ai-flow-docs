import React from "react";
import { useEffect } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header /*className={clsx("hero hero--primary", styles.heroBanner)}*/>
      <div className="flex w-full bg-teal-800/60  h-14 justify-center items-center mb-10">
        <p className="text-lg leading-none m-0">
          New Integration: Query your Airtable data through AI-Flow
        </p>
      </div>
      <div className="flex flex-col justify-center text-center mb-5">
        <h1 className="hero__title py-5">{siteConfig.title}</h1>
        <p className="hero__subtitle text-slate-300 text-xl">
          {siteConfig.tagline}
        </p>
      </div>
      {/* <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
         <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Get started - 5min ⏱️
          </Link>
        </div>
      </div> */}
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
