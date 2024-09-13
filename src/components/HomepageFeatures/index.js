import React from "react";
import clsx from "clsx";

const resources = [
  {
    title: "API Builder Nodes",
    description: "This guide describes how to use the API Builder feature.",
    type: "Tutorial",
    typeColor: "rgb(237 177 30)",
    url: "/docs/pro-features/api-builder/api-nodes/",
  },
  {
    title: "Integrate and Automate AI Workflows with API Builder",
    description: "This article dives into workflow creation and integration.",
    type: "Blog",
    typeColor: "rgb(166 255 169)",
    url: "/blog/api-builder-1/",
  },
];
function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text-center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function ResourceCard({ title, description, type, typeColor, url }) {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden w-full text-white bg-gradient-to-br  from-sky-950/90 hover:bg-sky-900 transition duration-300 pb-5">
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
            className="inline-flex items-center justify-center gap-2 text-center rounded-lg transition-colors w-full font-normal bg-transparent active:text-[#DCFF1E] h-auto active:bg-white text-white p-0 whitespace-nowrap font-space text-xl tracking-tighter sm:w-fit"
            href={url}
          >
            Learn more {">"}
          </a>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      <section className="flex flex-col justify-center w-full items-center space-y-2  mt-2 mb-10">
        <h3 className="text-2xl">Latest Resources</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {resources.map((resource, index) => (
            <div key={index} className="flex w-full md:w-1/3 px-4">
              <ResourceCard {...resource} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
