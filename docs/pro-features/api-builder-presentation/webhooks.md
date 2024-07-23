# Webhooks

## Webhook Node

The **Webhook Node** is a powerful tool that allows you to send outputs as webhooks. This node can be configured to send specific outputs from your flow to a designated webhook URL. Additionally, you can set a custom signature that will be included in the `AI_FLOW_SIGNATURE` header. This signature can also be injected via an API Input Node for added flexibility and security.

### Configuration

To configure the Webhook Node, follow these steps:

1. **Add the Webhook Node**: Drag and drop the Webhook Node into your flow.
2. **Set the Webhook URL**: Specify the URL where the webhook will be sent.
3. **Configure Outputs**: Select the outputs from your flow that you want to send to the webhook.
4. **Set Custom Signature**: Optionally, set a custom signature. This signature will be included in the `AI_FLOW_SIGNATURE` header of the webhook request.
5. **Inject Signature via API Input**: If desired, configure an API Input Node to dynamically inject the custom signature into the Webhook Node.

### Example

Here's a basic example of how to configure a Webhook Node:

![Webhook Node Example](/img/page-images/api-builder/api-builder-4.png)

In this example, the Webhook Node is configured to send the output `my_output` to the specified webhook URL. A custom signature is set to ensure the webhook request can be authenticated on the receiving end.

The webhook will send data structured as follows:

```json
{
  "my_output": "Lorem Ipsum dolor sit amet, consectetur"
}
```

You can add multiple webhook to your flow. The Webhook Node has an output handle and functions like a transition node in a flow. This means it will pass the output unaltered to the next node, allowing you to include intermediate results from your flow in the final response if desired.

## Global Webhook

(incoming)

---
