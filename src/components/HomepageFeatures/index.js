import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const docsLinks = [
  {
    title: "Build your Flow",
    url: "/docs/nodes-presentation/how-to-use-nodes/",
  },
  { title: "Open Source VS Pro", url: "/docs/install-guide/ai-flow-cloud/" },

  { title: "File Upload Settings", url: "/docs/file-upload/file-upload-s3/" },
  { title: "Pro Features", url: "/docs/category/-pro-features/" },
];

const templatesData = [
  {
    title:
      "Inpainting from Text Prompt - How to Achieve Seamless AI-Driven Image Editing",
    type: "Template",
    typeColor: "rgb(30 237 213)",
    imageUrl: "/img/blog-images/programmatic-inpainting-11.png",
    url: "https://ai-flow.net/blog/inpainting-from-text-prompt/",
  },
  {
    title: "Generate Vector Graphics with AI",
    type: "Template",
    typeColor: "rgb(30 237 213)",
    imageUrl: "/img/blog-images/generate-svg-with-recraft-v3-svg-2.png",
    url: "https://ai-flow.net/blog/generate-svg-with-recraft-v3-svg/",
  },
  {
    title: "Restyling - FLUX 1.1 Pro Ultra - Transform Your Images with AI",
    type: "Template",
    typeColor: "rgb(30 237 213)",
    imageUrl: "/img/blog-images/restyling-flux-1-1-pro-ultra.png",
    url: "https://ai-flow.net/blog/restyling-flux-1-1-pro-ultra/",
  },
  {
    title: "Generate Image Variations with FLUX Redux Dev",
    type: "Template",
    typeColor: "rgb(30 237 213)",
    imageUrl: "/img/blog-images/flux-redux-dev-guide-2.png",
    url: "https://ai-flow.net/blog/flux-redux-dev-guide/",
  },
  {
    title: "Edit Image with AI - Inpainting - FLUX Fill Pro",
    type: "Template",
    typeColor: "rgb(30 237 213)",
    imageUrl: "/img/blog-images/edit-image-with-inpainting-flux-fill-pro-3.png",
    url: "https://ai-flow.net/blog/edit-image-with-inpainting-flux-fill-pro/",
  },
  {
    title: "Edge-Guided AI Image Creation with Flux Canny Pro",
    type: "Template",
    typeColor: "rgb(30 237 213)",
    imageUrl:
      "/img/blog-images/edge-guided-image-creation-flux-canny-pro-5.png",
    url: "https://ai-flow.net/blog/edge-guided-image-creation-flux-canny-pro/",
  },
  {
    title: "Generate SEO-Optimized Product Description with AI",
    type: "Template",
    typeColor: "rgb(30 237 213)",
    imageUrl: "/img/blog-images/generate-product-description-2.png",
    url: "https://ai-flow.net/blog/generate-product-description/",
  },
  {
    title: "Efficient Text Extraction from Scanned Documents with AI-Flow OCR",
    type: "Template",
    typeColor: "rgb(30 237 213)",
    imageUrl: "/img/blog-images/ocr-workflow.png",
    url: "https://ai-flow.net/blog/text-extraction-with-ai-flow-ocr/",
  },
  {
    title: "Create Illustrated Short Children's Stories with AI",
    type: "Template",
    typeColor: "rgb(30 237 213)",
    imageUrl: "/img/blog-images/template-short-child-story.png",
    url: "https://ai-flow.net/blog/create-short-childrens-stories/",
  },
  {
    title: "Create Stunning Coloring Book Pages with AI",
    type: "Template",
    typeColor: "rgb(30 237 213)",
    imageUrl: "/img/blog-images/template-coloring-book.png",
    url: "https://ai-flow.net/blog/creating-coloring-book-pages-with-ai-flow/",
  },
  {
    title: "Summarize Youtube Video with AI",
    type: "Template",
    typeColor: "rgb(30 237 213)",
    imageUrl: "/img/blog-images/summarize-ytb-post-1.png",
    url: "https://ai-flow.net/blog/summarize-ytb-post/",
  },
  {
    title: "How to Summarize Documents or Ask Questions Using AI-FLOW",
    type: "Template",
    typeColor: "rgb(30 237 213)",
    imageUrl: "/img/blog-images/summarize-doc-post.png",
    url: "https://ai-flow.net/blog/summarize-doc-post/",
  },
];

// TemplateArticle component (unchanged, minor color tweaks for clarity)
function TemplateArticle({ title, imageUrl, url, type, typeColor }) {
  return (
    <article className="flex flex-col mb-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.02] overflow-hidden h-96 w-full group">
      <a href={url} aria-label={`Read more about ${title}`}>
        <img
          src={imageUrl}
          alt={`Thumbnail for ${title}`}
          className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </a>
      <div className="flex flex-col justify-between py-5 px-5 flex-1 overflow-hidden">
        <header>
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
            <span
              className="block h-2 w-2 rounded-full shadow-md"
              style={{
                backgroundColor: typeColor,
                boxShadow: `0 0 6px ${typeColor}`,
              }}
              aria-hidden="true"
            ></span>
            <span className="uppercase font-semibold tracking-wider text-gray-300 text-[0.7rem]">
              {type}
            </span>
          </div>
          <h4 className="text-lg font-semibold text-white mb-2 line-clamp-2">
            <a
              href={url}
              className="hover:underline focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
            >
              {title}
            </a>
          </h4>
        </header>
        <a
          href={url}
          className="text-cyan-400 flex items-center gap-2 transition-transform duration-300 hover:translate-x-1 focus:outline-none text-sm font-medium"
          aria-label={`Read more about ${title}`}
        >
          Read more
          <FaArrowRight className="transition-transform duration-300 transform group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  );
}
// Simple pill button for doc links
function DocLinkButton({ title, url }) {
  return (
    <a href={url} className="doc-pill" style={{ textDecoration: "none" }}>
      {title}
    </a>
  );
}

// Main page component
export default function HomepageFeatures() {
  return (
    <section className="text-white">
      {/* CTA: Get started in 5min */}
      <div className="flex justify-center mb-8">
        <a href="/docs/intro/" className="get-started-btn">
          Get started in 5min
          <FaArrowRight className="ml-3" />
        </a>
      </div>

      {/* Documentation Links (pills) */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {docsLinks.map((link, index) => (
          <DocLinkButton key={index} {...link} />
        ))}
      </div>

      {/* Featured Templates Section */}
      <div className="text-center">
        <h3 className="text-3xl font-semibold">
          Explore Our Featured Templates
        </h3>
        <p className="text-lg mt-2 text-gray-400 max-w-3xl mx-auto">
          Discover detailed guides on our selected templates. More options are
          available in the application, covering image generation, productivity,
          SEO workflows, data scraping, and more.
        </p>
      </div>

      {/* Templates Grid */}
      <div className="flex w-full justify-center items-center px-4 md:px-0">
        <div className="w-full max-w-7xl">
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fadeIn delay-[200ms]">
            {templatesData.map((article, index) => (
              <TemplateArticle key={index} {...article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
