# API Builder View Documentation

The **API Builder View** is accessible through the right pane of the app. This view allows you to monitor the current state of the API Key, learn how to use your API, and generate your API Key. Please note that to ensure the API functions correctly, you must enable Cloud Save.

![API Output Node Example](/img/page-images/api-builder/api-builder-3.png)

## Overview of the API

Depending on the presence of API Input, API Output, or Webhook in your flow, you'll be able to see different sections with a summary of every API-related node. Ensure that each of your Input and Output nodes has a distinct name.

## Generate API Key

In the API Builder, you can generate API Keys. These keys need to be used as an Authorization header for all requests to the API. You can use the API Keys generated for any of your flows.

Please note that API Keys are displayed only once at generation and never afterward.

## Instructions to Run Your Flow through the API

You can find code snippets in different programming languages to learn how to launch your API. Generally, you'll need to send a REST request with your API Key as the Authorization header.

The code snippets are pre-filled with your default values for each input.

Before sending a request, please ensure to name each of your input and output fields. Additionally, ensure that the most recent version of your flow is saved by clicking the Save button. You can see the timestamp of the last save if in doubt.

### Basic Example Using cURL

```bash
curl https://api.ai-flow.com/v1/flow/<your_flow_id>/run \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $AI_FLOW_API_KEY" \
-d '{
  "my_prompt": "Lorem Ipsum",
  "my_context": "Continue my sentence with 5 words of lorem ipsum"
}'
```

When you launch this request, your flow will start being processed. Due to the uncertain duration of the flow, the API will return a run ID that you will be able to use to get the result.

## Retrieve the Result

With your run ID, you can retrieve your result once it's ready. If the processing is not complete, you will receive a status indicating "pending" in the response.

For immediate access to your result without making additional requests, you can explore the Webhook section.

---

## Additional Resources

For more detailed information and advanced configurations, refer to the following resources:

- [Webhook Node Documentation](/docs/pro-features/api-builder-presentation/webhooks/)
