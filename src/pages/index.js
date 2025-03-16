import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header>
      <div className="flex w-full bg-teal-800/60  h-14 justify-center items-center mb-10">
        <p className="text-lg leading-none m-0">
          Latest Features: Claude 3.7, Google Gemini Node and Light Theme
        </p>
      </div>
      <div className="flex flex-col justify-center text-center mb-5">
        <h1 className="hero__title py-5">{siteConfig.title}</h1>
        <p className="hero__subtitle text-slate-300 text-xl">
          {siteConfig.tagline}
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`AI-Flow Documentation`}
      description="Full documentation on how to use AI-Flow and AI-Flow Pro. And how to install and configure the open-source version of AI-Flow."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
