---
sidebar_position: 4
---

# Add image generation

The integration of AI-driven image generation transforms the visual aspect of your application. Leveraging the power of renowned models like DALL-E from OpenAI or Stable Diffusion from StabilityAI, you can generate unique visuals based on textual prompts or other parameters. Below, we introduce two primary image generation nodes and their requirements.

## DALL-E (OpenAI)

:::tip Note
You need to add your **OpenAI API Key** in the configuration menu to use this node.
:::

The DALL-E node, a creation of OpenAI, leverages the renowned DALL-E model, which is designed to generate images from textual prompts. With this node, users can enter a text prompt, and DALL-E will generate a corresponding image, fusing the capabilities of language understanding and visual representation.

**DALL-E and Stable Diffusion nodes work the same, you can read the following part to learn more.**

## Stable Diffusion (StabilityAI)

:::tip Note
You need to add your **StabilityAI API Key** in the configuration menu to use this node.
:::

The Stable Diffusion node is powered by StabilityAI. It offers a different approach to image generation, providing more controlled and stable image outputs based on the input prompts. Whether you're aiming for detailed illustrations, abstract visuals, or specific image types, the Stable Diffusion node can be a game-changer in your visual content generation process.

![Stable diffusion without inpout node](/img/page-images/text-to-image-processing/1.png)

If you provide an input node, then it will be considered as the input prompt.

![Stable diffusion with inpout node](/img/blog-images/stable-diffusion-3-api-1.png)

Please note that new nodes are now available for Stable Diffusion 3, the StabilityAI API, and DALL-E 3.

You can refer to the following blog posts for introductions and real use-case scenarios:

- [Introducing Stable Diffusion 3](../../../blog/stable-diffusion-3-api)
- [Introducing StabilityAI API](../../../blog/stabilityai-api)
- [How to Automate Story Generation](../../../blog/automate-story-creation-1)
