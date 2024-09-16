// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const tailwindPlugin = require("./plugins/tailwind-config.cjs");
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "AI-Flow Documentation",
  tagline: "Everything you need to build your workflow",
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

  scripts: [{ src: "script.js", defer: true, "data-domain": "ai-flow.net" }],

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
          blogSidebarCount: 10,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/DahnM20/ai-flow-docs/tree/main/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
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
      },
      navbar: {
        title: "AI-Flow Docs",
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
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/DahnM20/ai-flow",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://twitter.com/DahnM20",
            label: "Twitter",
            position: "right",
          },
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
            title: "Documentation",
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
            title: "Popular Articles",
            items: [
              {
                label: "Integrate and Automate AI Workflow with API Builder",
                href: "/blog/api-builder-1/",
              },
              {
                label: "Document Summarization with AI-FLOW",
                href: "/blog/summarize-doc-post/",
              },
              {
                label: "Stable Diffusion 3 API Access via AI-FLOW",
                href: "/blog/stable-diffusion-3-api/",
              },
              {
                label: "Using Anthropic Claude 3 API in AI-FLOW",
                href: "/blog/anthropic-claude-api/",
              },
              {
                label: "Summarize Youtube Video using AI-FLOW",
                href: "/blog/summarize-ytb-post/",
              },
            ],
          },
          {
            title: "Latest Updates",
            items: [
              {
                label: "API Builder Nodes",
                href: "/docs/pro-features/api-builder/api-nodes/",
              },
              {
                label: "API Builder View",
                href: "/docs/pro-features/api-builder/builder-view/",
              },
              {
                label: "Creating New Nodes in AI-FLOW",
                href: "/docs/contribute/create-new-node/",
              },
              {
                label: "Guide to Translation Contributions",
                href: "/docs/contribute/add-new-translations/",
              },
              {
                label: "Setting Up S3 File Uploads",
                href: "/docs/file-upload/file-upload-s3/",
              },
            ],
          },
          {
            title: "Connect with Us",
            items: [
              {
                label: "🔵 AI-FLOW Web Application",
                href: "https://app.ai-flow.net",
              },
              {
                label: "🐦 Follow us on Twitter",
                href: "https://twitter.com/DahnM20",
              },
              {
                label: "🌐 Visit AI-FLOW Homepage",
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
