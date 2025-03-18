# Subflows

With the **Flow API Input** and **Flow API Output** nodes, you can integrate flow logic as a subflow within another flow. Unlike previous implementations using the Flow API Builder, subflows do not rely on HTTP calls. Instead, they represent a snapshot of a specific flow that can be reused elsewhere.

This feature allows you to create custom nodes based on your flows. As a result, you can manage flows more efficiently, reuse valuable components, and abstract complex logic into simple, reusable nodes.

For basic application usage, **Flow API Input** and **Flow API Output** nodes are not necessary. However, if you need to define specific interactions with a flow, incorporating these nodes is essential.

### Example of a Subflow-Capable Flow

Below is an example of a flow that can be utilized as a subflow:

![API Output Node Example](/img/page-images/api-builder/api-builder-2.png)

## The Subflow Node

The subflow node transforms an existing flow into a custom node.

- Each **Flow API Input** becomes an input for the node.
- Each **Flow API Output** becomes an output handle for the custom node.

### Steps to Create a Subflow Node

1. **Select a Flow**  
   Click on the "Select Flow" button.

   ![API Output Node Example](/img/page-images/api-builder/subflow-preview-4.png)

   A popup will display all valid flows. If a flow does not appear, it may be because it lacks properly defined **Flow API Input/Output** nodes, or the input/output names are not fully specified.

   ![API Output Node Example](/img/page-images/api-builder/subflow-preview-5.png)

2. **Preview the Flow**  
   Select a flow to view its preview. Confirm that it is the correct flow you want to use.

   ![API Output Node Example](/img/page-images/api-builder/subflow-preview.png)

   > **Note:** The custom node will not automatically update if the flow is modified later. It is a static snapshot of the selected flow's state.

3. **Validate the Node**

   The custom node is now ready for use, just like any other node. If you need to review the logic behind the node, click the "View Subflow" button.

   ![API Output Node Example](/img/page-images/api-builder/subflow-preview-3.png)

## Using Subflows Within Subflows

Subflows can be nested within other subflows. You can visualize nested subflows through the subflow view, up to a maximum depth of four levels.

While this flexibility allows for experimentation, excessive nesting is not recommended. Since subflows are static snapshots, deeply nested subflows can become difficult to maintain and troubleshoot.

## Additional Resources

For more advanced configurations and detailed guidance, refer to the following resources:

- [Subflow Loop](/docs/pro-features/api-builder/subflow-loop/)
- [API Builder View](/docs/pro-features/api-builder/builder-view/)
