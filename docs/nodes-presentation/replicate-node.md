---
sidebar_position: 6
---

# Access Diverse AI Models

## Replicate Node

The Replicate Node serves as a gateway to a multitude of open-source models hosted on Replicate, a platform that enables community members to host and run these models in the cloud. 

This node provides seamless access to a wide array of innovative models available on [Replicate](https://replicate.com/explore).

![Replicate Intro](/img/page-images/replicate-node/replicate-intro.gif)

:::tip Note

Each model on Replicate has its unique characteristics, including varying processing times and costs. Be aware that less frequently used models may experience slower response times during initial requests.

:::


### Model Selection Interface

Upon selecting "Select Model," a popup window displays all available models. Models under the "spotlight" category are specifically curated by AI-FLOW and are subject to change.

![Model Popup](/img/page-images/replicate-node/model-popup.png)

This diverse selection enables the generation of various outputs including text, mp3, mp4, gif, png, etc. However, due to this diversity, some models may not be fully supported by ai-flow. 

![Model Popup 2](/img/page-images/replicate-node/model-popup-2.png)

Within a Replicate Node, all free fields can be utilized as inputs or filled out as form fields. Mandatory fields are highlighted in red.

![Node Example](/img/page-images/replicate-node/node-example.png)

:::tip Note

Some models may lack mandatory fields but might still require specific inputs for successful operation.

:::


Below are two equivalent methods of utilizing the same model:

![Node Example](/img/page-images/replicate-node/node-example-3.png)


Resources such as images or sounds are transmitted via URLs. For instance, the output from DALL-E can be used as an input for the `input_image` field in the stable-video-diffusion model.

By default, many fields are pre-filled with default values. Beginners can start with these defaults and later learn more about specific models on the [Replicate website](https://replicate.com/explore).

![Node Example](/img/page-images/replicate-node/node-example-2.png)


### Collapse Node

Similar to other nodes, the Replicate Node can be collapsed by double-clicking on its header. This action will display only the fields that are linked to other nodes.

![Node Example](/img/page-images/replicate-node/node-example-4.png)
