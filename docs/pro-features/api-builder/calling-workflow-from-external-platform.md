# Calling AI-Flow from External Systems

You can trigger your AI-Flow workflows remotely from other platforms or external systems by using a REST API. Below is a concise overview on how to quickly set this up:

### Step 1: Obtain Your Flow ID and API Key

- Open the **API Builder View** from the right pane in AI-Flow.
- Retrieve your **Flow ID** from the right-side pane.
- Generate an **API Key**. Store this key securely, as it is shown only once.

### Step 2: Trigger Your Flow via REST API

Make a REST request using the following concise example:

```bash
curl https://api.ai-flow.com/v1/flow/<your_flow_id>/run \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $AI_FLOW_API_KEY" \
  -d '{"input_field": "your input data"}'
```

Replace `<your_flow_id>` and `$AI_FLOW_API_KEY` with your actual Flow ID and API Key.

The API will respond with a `run ID`, which you can later use to check the result.

### Step 3: Retrieve Results

Use your `run ID` to retrieve results:

```bash
curl https://api.ai-flow.com/v1/flow/<your_flow_id>/run/<run_id> \
  -H "Authorization: Bearer $AI_FLOW_API_KEY"
```

Alternatively, **configure a webhook URL to have results pushed directly to your system upon completion.**

[👉 Detailed Documentation on how to customize your API Here](/docs/pro-features/api-builder/api-nodes/)
