---
sidebar_position: 2
---

# Add an input

Input nodes play a foundational role in the application, serving as the initial point of data entry. They facilitate the injection of basic data into subsequent nodes for further processing, analysis, or action. Here, we detail three types of input nodes, each tailored for specific types of data inputs: Text, URL, and YouTube Transcript.

:::tip Tip

Even though those nodes serve as entry point, it is not mandatory to initiate a flow with one of them.

:::

## Text
With the text input node, users can directly input plain text which can then be processed, analyzed, or acted upon by other nodes in the application.


![Input node text example](/img/page-images/input-nodes/input-nodes-1.png)

## URL

The URL input node is adept at extracting data from web sources. It's an invaluable tool for web scraping tasks or extracting information from web pages.

![URL node example](/img/page-images/input-nodes/input-nodes-2.png)

:::tip Note

URL node output is often big and unecessary, so it is hidden by default. 

:::

:::danger Warning

Note that output that are excessively big may result in error in further nodes. 

:::

## Youtube Transcript

For those working with video content analysis or wanting to extract video subtitles for other purposes, the YouTube Transcript input node is essential. By simply providing the URL of a YouTube video, this node will capture the video's subtitles, making them available for further processing or analysis.