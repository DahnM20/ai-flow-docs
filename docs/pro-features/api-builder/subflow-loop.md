# Subflow Loop

Building upon the robust capabilities of **Subflow Nodes**, we are excited to introduce the **Subflow Loop Node**. This powerful addition enhances your flow logic by enabling iteration over multiple data sets within a subflow, supporting the creation of more complex and dynamic workflows.

---

## Understanding the Loop Mechanism

The **Subflow Loop Node** efficiently handles repetitive tasks by iterating over specified fields within a subflow. This mechanism allows your flows to seamlessly process lists of data, executing subflow logic for each item in the list. Below is a detailed explanation of how the loop mechanism operates:

### Overview

1. **Loop Fields**: These are input fields designated for iteration. Each loop field must receive a list, enabling the Subflow Loop Node to process each element individually.

2. **Maximum Iterations**: To prevent excessive processing, the Subflow Loop Node enforces a maximum number of iterations. If the number of items in the loop fields exceeds this limit, an error is triggered.

### How It Works

1. **Input Validation**: The node verifies the presence of necessary subflow data and ensures that **all loop fields contain lists**. It also checks that **all loop fields have the same length** to maintain consistency across iterations.

2. **Determining Iterations**: The number of iterations is determined by the length of the longest loop field. All loop fields must have matching lengths to avoid mismatches.

3. **Executing the Subflow**: The node executes the subflow logic for each iteration, using the prepared parameters.

4. **Aggregating Outputs**: Outputs from each iteration are collected and combined to produce the final result.

5. **Streaming and Final Output**: Intermediate results are streamed for real-time visualization, and the final aggregated output is returned once all iterations are complete.

---

## Tutorial

To illustrate the Subflow Loop Node, we will use a basic example flow. In this flow, the node generates a line of text for each subject using GPT.

![Example Flow](/img/page-images/api-builder/subflow-loop-intro.png)

### Setting Up the Subflow Loop Node

1. **Drag and Drop the Subflow Loop Node**

   ![Example Flow](/img/page-images/api-builder/subflow-loop-1.png)

2. **Select the Subflow**: Choose the subflow containing the logic you want to iterate over, then validate your selection.

   ![Example Flow](/img/page-images/api-builder/subflow-loop-2.png)

3. **Define Loop Fields**: Select the input fields to be looped over in the loop_over_fields list. Ensure that each designated field receives a list as input.

   - For this example, the field is named `value`. It will be the looped field, while others remain constant during iterations.

   ![Example Flow](/img/page-images/api-builder/subflow-loop-3.png)

4. **Connect a List Input**: Connect a list input to the selected fields. You can achieve this using a **Data Splitter** with the `output_as_list` option enabled, or by entering the list directly into the input field.

   - Example with Data Splitter:

     ![Example Flow](/img/page-images/api-builder/subflow-loop-4.png)

   - Direct input method:

     ![Example Flow](/img/page-images/api-builder/subflow-loop-5.png)

   - Other nodes that can serve as loop inputs:

     ![Example Flow](/img/page-images/api-builder/subflow-loop-6.png)

5. **Run the Node**

   The Subflow Loop Node outputs a list of results. If the subflow has multiple defined outputs, the result will be a list for each output.

   - In this example, the subflow has a single output, resulting in one list with three elements:

     ![Example Flow](/img/page-images/api-builder/subflow-loop-7.png)

   - The output can then be used as input for additional processing, including nesting in another Subflow Loop Node.

### Comparing Approaches

By combining the Subflow Loop Node with tools like the **Data Splitter** or **Regex Extractor**, you can dynamically generate content without being limited to a fixed number of outputs. Previously, workflows required a predefined number of outputs and individual processing nodes.

![Comparison](/img/page-images/api-builder/subflow-loop-8.png)

While the bottom approach runs nodes in parallel—a feature not yet supported by the Subflow Loop—you now have the flexibility to design your flow as needed. Parallel execution may be supported in the future.

---

## Best Practices

- **Consistent List Lengths**: Ensure all loop fields have lists of the same length to avoid runtime errors.
- **Monitor Nested Loops**: While nested Subflow Loops are supported, excessive nesting can complicate debugging and maintenance. Aim for a balance between complexity and clarity.

---

## Conclusion

The **Subflow Loop Node** significantly enhances the flexibility and efficiency of your flow-based applications by enabling seamless iteration over data sets within subflows. By abstracting repetitive tasks into a reusable node, you can simplify workflows, improve maintainability, and maximize the power of your application.

For more detailed guidance and advanced configurations, refer to our [Additional Resources](#additional-resources) section below.

---

## Additional Resources

- [Subflow Node Documentation](/docs/pro-features/api-builder/subflows/)
- [Flow API Reference](/docs/pro-features/api-builder/api-nodes/)
