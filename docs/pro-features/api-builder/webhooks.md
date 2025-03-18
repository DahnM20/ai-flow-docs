# Send a Webhook Request

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

The global webhook is a unique webhook that will return all the output defined in your API once the run is completed.

Global webhook can be added in your run request through the specific field `run_options`.

Here's an example of a full request :

```json
{
  "my_input_1": "value",
  "my_input_2": "value",
  "run_options": {
    "global_webhook": {
      "url": "your_webhook_url",
      "signature": "optional_signature_header"
    }
  }
}
```

As for the other webhooks, if you specify a signature, it will be included in the `AI_FLOW_SIGNATURE` header of the webhook request.

### Additional : save option

If you want your output to only be accessible through the webhook, you can add the optional **save** option.

By default, your result are available for ~48H through the /result route, with the given run_id and the good api key.

With this option set to false, your result will only be send to you, and not be accessible in any other ways.

_Please note that files URL such as images, videos, are still hosted 48H for you to be able to save them._

```json
{
  "my_input_1": "value",
  "my_input_2": "value",
  "run_options": {
    "global_webhook": {
      "url": "your_webhook_url",
      "signature": "optional_signature_header"
    },
    "save": false
  }
}
```

> Using this option without the global webhook will just make your result not accessible. Unless if you have configured individuals webhooks in the flow.

---
