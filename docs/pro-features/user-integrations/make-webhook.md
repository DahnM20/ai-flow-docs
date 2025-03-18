# Make Webhook

The **Make Webhook Node** enables seamless integration between your workflows and [Make](https://www.make.com/), facilitating automation across multiple applications and platforms. This node uses webhooks to efficiently transmit data, allowing your workflows to easily communicate with Make scenarios.

## Configuration Fields

- **Webhook URL** _(required)_: Enter the webhook URL provided by your Make scenario, used to receive workflow data.
- **Headers** _(optional)_: Specify custom HTTP headers such as authentication tokens or content-type specifications.
- **Data** _(optional)_: Provide the payload data to send, formatted as JSON or plain text, based on your scenario requirements.

## Features

- **Secure Validation**: Automatically validates that the provided URL is an authentic Make webhook.
- **Flexible Data Handling**: Supports sending custom headers and payloads, allowing precise control over the data sent.
- **Clear JSON Output**: Generates structured outputs including the webhook response and transmitted data for effortless integration in subsequent workflow steps.

## Outputs

- **Response**: Contains the response received from Make, useful for ensuring successful data transmission and troubleshooting.
- **Data Sent**: Shows the exact payload transmitted, providing transparency and traceability.

## Example Use Cases

- Automate data synchronization between workflows and external applications such as CRM tools.
- Trigger email notifications or Slack messages directly from workflow events.
- Easily integrate workflows with external services to perform complex automation scenarios.

![Make Webhook Node](/img/page-images/make-webhook.png)

The Make Webhook Node simplifies and accelerates the integration process, empowering you to connect diverse systems efficiently within your workflows.
