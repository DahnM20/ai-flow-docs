// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const tailwindPlugin = require("./plugins/tailwind-config.cjs");
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "AI-Flow Documentation",
  tagline:
    "Effortlessly Connect, Customize, and Automate AI Workflows with Our Drag-and-Drop Interface",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.ai-flow.net",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  trailingSlash: true,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  plugins: [tailwindPlugin],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
    localeConfigs: {
      en: {
        htmlLang: "en-GB",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/DahnM20/ai-flow-docs/tree/main/docs/",
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 0,
          // blogSidebarCount: "ALL",
          blogSidebarTitle: "All posts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/DahnM20/ai-flow-docs/tree/main/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          ignorePatterns: [
            "/tags/**",
            "/blog/**",
            "/fr/tags/**",
            "/fr/blog/**",
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/ai-flow-social-card.png",
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
      },
      navbar: {
        title: "Documentation",
        logo: {
          alt: "AI-Flow Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Tutorial",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          // {
          //   href: "https://github.com/DahnM20/ai-flow",
          //   label: "GitHub",
          //   position: "right",
          // },
          // {
          //   href: "https://twitter.com/DahnM20",
          //   label: "Twitter",
          //   position: "right",
          // },
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "DOCUMENTATION",
            items: [
              {
                label: "Introduction to AI-FLOW",
                to: "/docs/intro/",
              },
              {
                label: "Windows Installation Guide",
                to: "/docs/install-guide/install-executable/",
              },
              {
                label: "Docker Installation Guide",
                to: "/docs/install-guide/install-docker/",
              },
              {
                label: "Using Replicate for AI Models",
                to: "/docs/nodes-presentation/replicate-node/",
              },
            ],
          },
          {
            title: "POPULAR ARTICLES",
            items: [
              {
                label: "Getting Started With AI-Flow",
                href: "https://ai-flow.net/blog/getting-started-with-ai-flow/",
              },
              {
                label: "How to Build and Deploy AI Workflows Easily",
                href: "https://ai-flow.net/blog/how-to-build-and-deploy-ai-workflows/",
              },
              {
                label: "How to Generate High-Quality Images with FLUX 1.1 Pro",
                href: "https://ai-flow.net/blog/generate-images-with-flux-1-1-pro/",
              },
              {
                label: "Integrate and Automate AI Workflow with API Builder",
                href: "https://ai-flow.net/blog/api-builder-1/",
              },
              {
                label: "Access Replicate API through AI-Flow",
                href: "https://ai-flow.net/blog/replicate-node/",
              },
              {
                label: "Document Summarization with AI-FLOW",
                href: "https://ai-flow.net/blog/summarize-doc-post/",
              },
              {
                label: "Summarize Youtube Video using AI-FLOW",
                href: "https://ai-flow.net/blog/summarize-ytb-post/",
              },
            ],
          },
          {
            title: "LATEST UPDATES",
            items: [
              {
                label: "Inpainting from Text Prompt",
                href: "https://ai-flow.net/blog/inpainting-from-text-prompt/",
              },
              {
                label: "Generate Vector Graphics with AI",
                href: "https://ai-flow.net/blog/generate-svg-with-recraft-v3-svg/",
              },
              {
                label: "Restyling - FLUX 1.1 Pro Ultra",
                href: "https://ai-flow.net/blog/restyling-flux-1-1-pro-ultra/",
              },
              {
                label: "Generate Image Variations with FLUX Redux Dev",
                href: "https://ai-flow.net/blog/flux-redux-dev-guide/",
              },
              {
                label: "Edit Image with AI - Inpainting - FLUX Fill Pro",
                href: "https://ai-flow.net/blog/edit-image-with-inpainting-flux-fill-pro/",
              },
              {
                label: "Generate SEO-Optimized Product Description with AI",
                href: "https://ai-flow.net/blog/generate-product-description/",
              },
              {
                label: "Create Stunning Coloring Book Pages with AI",
                href: "https://ai-flow.net/blog/generate-product-description/",
              },
              {
                label: "API Builder Nodes",
                href: "/docs/pro-features/api-builder/api-nodes/",
              },
              {
                label: "API Builder View",
                href: "/docs/pro-features/api-builder/builder-view/",
              },
              // {
              //   label: "Creating New Nodes in AI-FLOW",
              //   href: "/docs/contribute/create-new-node/",
              // },
              // {
              //   label: "Guide to Translation Contributions",
              //   href: "/docs/contribute/add-new-translations/",
              // },
              // {
              //   label: "Setting Up S3 File Uploads",
              //   href: "/docs/file-upload/file-upload-s3/",
              // },
            ],
          },
          {
            title: "PRODUCT",
            items: [
              {
                label: "AI-FLOW Web Application",
                href: "https://app.ai-flow.net",
              },
              {
                label: "AI-FLOW Homepage",
                href: "https://ai-flow.net",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AI-Flow, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
