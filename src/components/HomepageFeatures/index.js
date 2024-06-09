import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    description: (
      <>
        AI-Flow is designed for effortless installation and use, even for
        beginners with minimal programming knowledge. Quickly set up your
        workflows and start automating.
      </>
    ),
  },
  {
    title: "Seamless Integration",
    description: (
      <>
        Easily pull in models from OpenAI, StabilityAI, Replicate and integrate
        them into your workflows. AI-Flow's spatial multi-step processing makes
        it simple to create complex automation.
      </>
    ),
  },
  {
    title: "Responsive and Intuitive",
    description: (
      <>
        AI-Flow features a responsive and intuitive layout that enhances your
        experience. Navigate and manage your automated tasks with ease.
      </>
    ),
  },
];

const resources = [
  {
    title: "Creating New Nodes in AI-FLOW",
    description:
      "This guide describes how to create new nodes in the application using a single Python file.",
    type: "Tutorial",
    typeColor: "rgb(237 177 30)",
    url: "/docs/contribute/create-new-node",
  },
  {
    title: "Introducing Claude 3 API in AI-FLOW",
    description:
      "Following user feedback, AI-FLOW has now integrated Claude 3 from Anthropic, an upgrade in our text generation toolkit.",
    type: "Blog",
    typeColor: "rgb(166 255 169)",
    url: "/blog/anthropic-claude-api",
  },
];
function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function ResourceCard({ title, description, type, typeColor, url }) {
  return (
    <div className="flex flex-col rounded-[5px] overflow-hidden w-full text-white bg-sky-950 hover:bg-sky-900 transition duration-300">
      <div className="flex justify-between px-6 py-4 items-center border-[#8A99A0]">
        <div className="flex items-center gap-2 text-sm">
          <span
            className="block h-[13px] w-[13px] rounded-full"
            style={{ background: typeColor }}
          ></span>
          <span className="uppercase font-semibold">{type}</span>
        </div>
      </div>
      <div className="flex flex-col gap-3 px-6 pb-3">
        <h4 className="min-h-2 font-jakarta text-2xl leading-[32px]">
          {title}
        </h4>
        <p className="min-h-7  font-jakarta text-lg">{description}</p>
        <div className="flex items-end justify-between">
          <a
            className="inline-flex items-center justify-center gap-2 text-center rounded-lg transition-colors w-full font-normal bg-transparent active:text-[#DCFF1E] h-auto active:bg-white text-white p-0 whitespace-nowrap font-space text-[15px] tracking-tighter sm:w-fit"
            href={url}
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      <section className="flex flex-col justify-center w-full items-center space-y-2  mt-2">
        <h3 className="text-3xl font-jakarta">Latest Resources</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {resources.map((resource, index) => (
            <div key={index} className="flex w-full md:w-1/3 px-4">
              <ResourceCard {...resource} />
            </div>
          ))}
        </div>
      </section>
      <section className={styles.features}>
        <div className="container">
          <h3 className="text-3xl font-jakarta text-center">Features</h3>
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
