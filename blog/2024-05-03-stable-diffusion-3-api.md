---
slug: stable-diffusion-3-api
title: Access Stable Diffusion 3 API through AI-FLOW
authors: dahn
tags: [AI-FLOW, Image, Stable Diffusion, Image Generation, Image Processing]
---

<head>
  <title>Stable Diffusion 3 in AI-FLOW</title>
  <meta charSet="utf-8" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Stable Diffusion 3 in AI-FLOW" />
  <meta name="twitter:image" content="https://docs.ai-flow.net/img/blog-card-images/blog-sd3.png" data-rh="true"/>
  <meta property="og:image" content="https://docs.ai-flow.net/img/blog-card-images/blog-sd3.png" data-rh="true"/>
</head>

**Introducing Stable Diffusion 3 in AI-FLOW v0.6.4**

AI-FLOW has now integrated Stable Diffusion 3, a significant upgrade in our image generation toolkit. This new version offers enhanced capabilities and adheres more closely to the prompts you input, creating images that truly reflect your creative intent. Additionally, it introduces the ability to better incorporate text directly within the generated images.

### Visual Comparison: From Old to New

To illustrate the advancements, compare the outputs of the previous Stable Diffusion node and the new Stable Diffusion 3 node using the prompt:

`The phrase 'Stable Diffusion' sculpted as a block of ice, floating in a serene body of water.`

The difference in detail and fidelity is striking.

![Example](/img/blog-images/stable-diffusion-3-api-1.png)

### Model Options: Standard and Turbo

Choose between the standard Stable Diffusion 3 and the Turbo version. Note that with the Turbo variant, the `negative_prompt` field is not utilized, which accelerates processing while maintaining high-quality image generation.

### Enhance Your Creative Process

Experiment by combining outputs from Stable Diffusion 3 with other APIs, such as the `instantmesh` from Replicate API that generates a mesh from any given image input. This integration opens new possibilities for creators and developers.

![Example](/img/blog-images/stable-diffusion-3-api-2.png)

**Looking Ahead**

Expect more enhancements and support from StabilityAI in the coming weeks as we continue to improve AI-FLOW and expand its capabilities.

**Get Started**

Dive into a world of enhanced image creation with Stable Diffusion 3 on AI-FLOW. Experience the power of advanced AI-driven image generation. [Try it now!](https://app.ai-flow.net)
