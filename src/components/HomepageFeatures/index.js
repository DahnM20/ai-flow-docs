import React from "react";

// Define the big card data
const bigCardData = {
  title: "How to Build and Deploy AI Workflows Easily",
  description:
    "Discover how to effortlessly build and deploy AI workflows using AI-Flow's drag-and-drop interface. Integrate multiple AI models and automate tasks without coding!",
  type: "Article",
  typeColor: "rgb(237, 177, 30)",
  date: "September 26, 2024",
  imageUrl: "/img/blog-card-images/app-overview-r.png",
  url: "/blog/how-to-build-and-deploy-ai-workflows/",
};

// Define the small articles data
const smallArticlesData = [
  {
    title: "Access Replicate API through AI-Flow",
    type: "Article",
    typeColor: "rgb(237, 177, 30)",
    imageUrl: "/img/page-images/replicate-node/model-popup.png",
    url: "/blog/replicate-node/",
  },
  {
    title: "Integrate and Automate AI Workflows with API Builder",
    type: "Article",
    typeColor: "rgb(237, 177, 30)",
    imageUrl: "/img/page-images/api-builder/api-builder-6.png",
    url: "/blog/api-builder-1/",
  },
  {
    title: "How to automate story and image creation using AI - Part 1",
    type: "Article",
    typeColor: "rgb(237, 177, 30)",
    imageUrl: "/img/blog-images/story-2.png",
    url: "/blog/automate-story-creation-1/",
  },
];

function BigCard({ title, description, type, typeColor, date, imageUrl, url }) {
  return (
    <article className="big-card rounded-xl overflow-hidden bg-white dark:bg-gray-800/90 shadow-md hover:shadow-lg transition-shadow duration-300">
      <a href={url} className="block">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-auto transition-transform duration-300 hover:scale-105"
        />
      </a>
      <div className="p-8">
        <header>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
            <span
              className="block h-3 w-3 rounded-full"
              style={{ backgroundColor: typeColor }}
            ></span>
            <span className="uppercase font-semibold text-gray-700 dark:text-gray-300">
              {type}
            </span>
            <span className="ml-auto">{date}</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            <a href={url} className="hover:underline">
              {title}
            </a>
          </h3>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </header>
      </div>
    </article>
  );
}
function SmallArticle({ title, imageUrl, url, type, typeColor }) {
  return (
    <article className="small-article flex mb-6  bg-gray-800/60 bg-gradient-to-br rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg overflow-hidden">
      <a
        href={url}
        className="flex-shrink-0"
        aria-label={`Read more about ${title}`}
      >
        <img
          src={imageUrl}
          alt={`Thumbnail for ${title}`}
          className="w-24 h-24 md:h-full  md:w-44 md:min-h-36 object-cover transition-transform duration-300 hover:scale-105 "
        />
      </a>
      <div className="ml-4 flex flex-col justify-between py-5 px-2">
        <header>
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-2">
            <span
              className="block h-2 w-2 rounded-full"
              style={{ backgroundColor: typeColor }}
              aria-hidden="true"
            ></span>
            <span className="uppercase font-semibold text-gray-700 dark:text-gray-300">
              {type}
            </span>
          </div>
          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
            <a
              href={url}
              className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {title}
            </a>
          </h4>
        </header>
        <a
          href={url}
          className="text-blue-500 dark:text-blue-400 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label={`Read more about ${title}`}
        >
          Read more &gt;
        </a>
      </div>
    </article>
  );
}

export default function HomepageFeatures() {
  return (
    <section className="flex flex-col items-center mt-2 mb-10 px-4">
      <div className="w-full max-w-7xl">
        <div className="flex flex-col md:flex-row md:-mx-4">
          {/* Left Column for Big Card */}
          <div className="md:w-1/2 md:px-4 mb-8 md:mb-0">
            <BigCard {...bigCardData} />
          </div>
          {/* Right Column for Small Articles */}
          <div className="md:w-1/2 md:px-4">
            {smallArticlesData.map((article, index) => (
              <SmallArticle key={index} {...article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
