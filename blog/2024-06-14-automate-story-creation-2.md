---
slug: automate-story-creation-2
title: How to automate story and image creation using AI - Part 2
authors: dahn
description: Create captivating children's stories effortlessly with AI-FLOW. Follow our step-by-step guide to enhance your storytelling process. Start now!
tags: [AI-FLOW, Storytelling, Child's Story, Creativity, AI, AI writing tools]
---

<head>
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:title" content="How to automate story and image creation using AI" /> 
  <meta name="twitter:description" content="This guide provides a straightforward setup to help you efficiently create captivating AI powered stories using AI-FLOW." />
  <meta name="twitter:creator" content="@AIFlowApp"/>
  <meta name="twitter:image" content="https://docs.ai-flow.net/img/blog-card-images/blog-story-2.png"/>
  <meta name="twitter:image:alt" content="This guide provides a straightforward setup to help you efficiently create captivating AI powered stories using AI-FLOW."/>
  <meta property="og:image" content="https://docs.ai-flow.net/img/blog-card-images/blog-story-2.png" data-rh="true"/>
</head>

## How to Automate Story Creation Using AI-FLOW - Part 2

This is the second installment of our challenge on [How to Automate Story Creation](./2024-06-13-automate-story-creation-1.md).

In this part, we will focus on building a chapter and automating illustration generation.

### Writing the First Chapter

In the previous part, we have created a plan of the story with three chapters, and a small summary for each. We could split the plan into three chunks, but for simplicity, I'll keep chapters as a single block. This approach helps GPT maintain the story's context, ensuring continuity between chapters without introducing conflicting elements.

When writing your chapter, it is important to remind GPT of **the desired tone, the target audience, and how you want the story to be told.** You might prefer more dialogue or perhaps more descriptions. This choice is up to you.

I’ve used a basic prompt that emphasizes important elements, but please note that this is just a simple example.

**Here’s the prompt I used for the first chapter:**

_Write the first chapter of this short story intended for a 12-year-old audience._

- _**Tone:** Maintain a light-hearted, engaging, and adventurous tone. The story should be exciting and filled with wonder, suitable for young readers._
- _**Language:** Use simple and clear language. Avoid complex vocabulary and ensure that sentences are easy to follow, yet vivid enough to spark imagination._
- _**Dialogue:** Craft natural and relatable dialogue for pre-teens. Ensure conversations are lively and reflect the age and personality of the characters._
- _**Pacing:** Keep the chapter fast-paced and captivating to hold the reader's attention. Introduce key elements of the story quickly to hook the audience from the beginning._
- _**Descriptions:** Use vibrant and imaginative descriptions to paint a clear picture of the scenes and characters. Aim for language that is evocative but not overly detailed or intricate._
- _**Length:** Keep the chapter concise, focusing on introducing the main elements of the story without overloading the reader with too much information._

---

### Extracting Interesting Scenes

From the chapter, we will identify the most interesting scenes to illustrate:

_Based on this chapter, identify 3 interesting elements that would be compelling to illustrate. Provide each element as a short phrase, separated by semicolons. Do not add any additional comments._

**Output:**

_Eryn and Frostbite navigating the icy forest; The scarlet dragon scale above the fireplace; The Crystal Caves glimmering in the distance._

Next, use the Data Splitter to treat each element individually.

![Split the concepts](/img/blog-images/story-2-0.png)

### Creating Visual Prompts

Once the concepts are split, use the Merge Node to create an illustrated prompt based on the specific scene **and the overall essence of the story**. If your essence is good enough, it should include character descriptions, important places, concepts, and the desired art style. This helps to get consistent visual prompts.

Here we are using the "Merge + GPT" mode, so that the merge result is directly send as a prompt to GPT.

**Example Prompt:**

_Based on this story description: ${input-2}_

_Create a visual prompt for DALL-E emphasizing this element for a given scene: ${input-1}_

_IMPORTANT: Respond with only the visual prompt. Do not add any other text, title, comments, or explanations._

---

> Ensure GPT understands to focus on the current element to avoid depicting the entire story/chapter.

Repeat this process for each scene. You can duplicate your node.

![Illustrate story element](/img/blog-images/story-2-1.png)

Here are my results for "The Crystal Caves" and "The scarlet dragon scale above the fireplace". Note that GPT added the main characters in the first one, based on the essence.

### Advanced Tips

Also, consider adding a negative prompt to tools like Stable Diffusion 3 to refine the results. For example, adding "realistic" as a negative prompt can steer the generation away from realism if that’s not desired.

When merging, make sure GPT prioritizes the current element over the entire story to maintain focus.

### Conclusion

Creating a story is a complex project. Even with perfect prompts, proceed step by step to ensure smooth progress. This guide provides a logical flow for using AI-FLOW to aid in your story creation. In the next part, we will explore ways to create consistent visuals for our characters.

Start your journey with [AI-FLOW now!](https://app.ai-flow.net)

![Overall flow](/img/blog-images/story-2-3.png)

Stay tuned for the next part where we delve into character visual consistency.
