# API Nodes

To begin building your API, you will need to utilize at least one of the following nodes: **Flow API Input**, **Flow API Output**, or **Webhook** (which will be covered in a later section).
This node will define the structure of the API of your AI workflow.

## API Input Node

The **API Input Node** is used to define the inputs for your API. Each API Input Node corresponds to a field in the request body sent to initiate your flow. The field `api_input_name` sets the name of the input field in the request body.

### Example

Consider the following configuration:

![API Input Node Example](/img/page-images/api-builder/api-builder-1.png)

You would send a request body structured as follows:

```json
{
  "my_prompt": "Lorem Ipsum",
  "my_context": "Lorem Ipsum"
}
```

Each API Input Node can have a default value. If a default value is set, the parameter becomes optional in the request body.

The API Input Node adapts to the type of field it is connected with.

## API Output Node

The **API Output Node** is straightforward to configure. You only need to set the `api_output_name`, which will be the name of the field in the final response.

### Example

Consider the following configuration:

![API Output Node Example](/img/page-images/api-builder/api-builder-2.png)

The final response will be structured as follows:

```json
{
  "my_output": "Lorem Ipsum dolor sit amet, consectetur"
}
```

### Handling Outputs

You can set as many API Output or API Input nodes as needed. The API Output Node has an output handle and functions like a transition node in a flow. This means it will pass the output to the next node, allowing you to include intermediate results from your flow in the final response if desired.

---

## Additional Resources

For more detailed information and advanced configurations, refer to the following resources:

- [Webhook Node Documentation](/docs/pro-features/api-builder/webhooks/)
- [API Builder View](/docs/pro-features/api-builder/builder-view/)
