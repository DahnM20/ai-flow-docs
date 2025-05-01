---
slug: api-builder-1
title: Integrate and Automate AI Workflows with API Builder
authors: dahn
description: Discover practical methods to integrate and automate your AI workflow through AI-Flow API Builder.
tags: [AI-FLOW, API Builder, API, AI Tools, Webhook]
---

<head>
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:title" content="Integrate and Automate AI Workflows with API Builder" />
  <meta name="twitter:description" content="Discover practical methods to integrate and automate your AI workflow through AI-Flow API Builder." />
  <meta name="twitter:creator" content="@AIFlowApp"/>
  <meta name="twitter:image" content="https://docs.ai-flow.net/img/blog-card-images/blog-api-builder-1.png"/>
  <meta name="twitter:image:alt" content="Discover practical methods to integrate and automate your AI workflow through AI-Flow API Builder."/>
  <meta property="og:title" content="Integrate and Automate AI Workflows with API Builder"/>
  <meta property="og:description" content="Discover practical methods to integrate and automate your AI workflow through AI-Flow API Builder."/>
  <meta property="og:image" content="https://docs.ai-flow.net/img/blog-card-images/blog-api-builder-1.png"/>
</head>

## Unleashing the Power of AI Workflow with API Builder Nodes

Streamlining and integrating AI workflows is now more accessible with the advanced capabilities of the AI-Flow API. By leveraging the API Builder, developers can create robust AI flows, ensuring seamless integration and interaction between various AI models like GPT, DALL-E, Claude, Stable Diffusion, or any Replicate model. This article delves into the core features of the AI-Flow API Builder, demonstrating its benefits and ease of use.

![API Builder Overview](/img/page-images/api-builder/api-builder-6.png)

### Streamline Your AI Flow with API Input and Output Nodes

**API Input Node**:
The API Input Node is designed to define the inputs for your API, mapping each field in the request body to a corresponding node in your flow. By setting default values, developers can make certain parameters optional.

![API Input Node Example](/img/page-images/api-builder/api-builder-1.png)

Example Configuration:

```json
{
  "my_prompt": "Lorem Ipsum",
  "my_context": "Lorem Ipsum"
}
```

This configuration showcases how inputs are structured, making it straightforward to initiate the flow with clear, defined parameters.

---

**API Output Node**:
Configuring the API Output Node is very simple. This node specifies the names of the fields in the final response, ensuring the output is structured and understandable. Multiple output nodes can be set to pass additionnal or intermediate results.

![API Output Node Example](/img/page-images/api-builder/api-builder-2.png)

In this simple example, the API response will be formatted as followed:

```json
{
  "my_output": "Lorem Ipsum dolor sit amet, consectetur"
}
```

This example demonstrates the simplicity of output configuration, providing a clear and concise response structure.

### Manage and Monitor Your API with the API Builder View

The **API Builder View** is your command center for managing and monitoring your AI Workflow API. Accessible through the right pane of the app, this view provides a comprehensive overview of your API configuration, allowing you to generate and manage API Keys seamlessly.

![API Builder View](/img/page-images/api-builder/api-builder-3.png)

**Generating API Keys**:
To ensure secure access, API Keys are generated within the API Builder. These keys, essential for authorizing requests, are displayed only once to maintain security. Including these keys in your requests as an Authorization header is crucial for successful API calls.

**Running Your Flow through the API**:
Launching your flow is straightforward with the provided code snippets in the API Builder View. For instance, using cURL, you can initiate your flow as follows:

```bash
curl https://api.ai-flow.net/v1/flow/<your_flow_id>/run \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $AI_FLOW_API_KEY" \
-d '{
  "my_prompt": "Lorem Ipsum",
  "my_context": "Continue my sentence with 5 words of lorem ipsum"
}'
```

This command initiates the flow, returning a run ID to track the process. Retrieve the results using this ID once the processing completes.

### Enhance Integration with Webhook Nodes

The **Webhook Node** is a versatile tool within the API Builder, enabling you to send outputs to designated URLs. Configuring the Webhook Node involves specifying the target URL and selecting the outputs to send, with the option to include custom signatures for enhanced security.

![Webhook Node Example](/img/page-images/api-builder/api-builder-4.png)

In this case, the webhook will send the following data :

```json
{
  "my_output": "Lorem Ipsum dolor sit amet, consectetur"
}
```

In this configuration, the Webhook Node sends structured data to the specified URL, ensuring smooth integration and authentication via custom signatures.

### Conclusion

The AI Workflow API, powered by the API Builder Nodes, offers a streamlined, efficient way to create and manage AI flows. With intuitive nodes for input and output, API management tools, and flexible webhook configurations, developers can build powerful AI workflows tailored to their needs.

### Additional Resources

For more detailed information, refer to the following resources:

- [API Builder Nodes](/docs/pro-features/api-builder/api-nodes/)
- [API Builder View](/docs/pro-features/api-builder/builder-view/)
- [Webhook Node Documentation](/docs/pro-features/api-builder/webhooks/)
