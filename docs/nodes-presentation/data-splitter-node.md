# Data Splitter Node

The **Data Splitter Node** allows you to break down long text data into smaller, manageable parts. You can split text using AI-based suggestions or custom separators, making it easier to process structured or semi-structured data in your workflow.

## AI Mode

In **AI Mode**, the node leverages GPT (default: GPT-4o) to intelligently identify and separate distinct ideas or concepts within the input text.

- The AI model follows a predefined prompt instructing it to split ideas using semicolons (`;`).
- **Example use case:** If you input a long description or a bullet-point list, the AI will return structured, distinct parts separated by semicolons.
- The final output is automatically split into a list based on the semicolon separator.

![Separator Example](/img/page-images/data-splitter-ai.png)

### When to Use AI Mode

- Works well for **short prompts** or text with **clearly distinguishable elements**.
- **Not recommended** for **long or complex text**, as AI may not always split content reliably.

## Separator Mode (Recommended)

In **Separator Mode**, you can define a custom separator (default: `;`) to split the text manually.

- Ideal for **structured input**, where you already have a known delimiter.
- Supports **escape characters** like `\n` (newline), `\t` (tab), and `\r` (carriage return).
- **More reliable** than AI Mode since the split follows a precise rule.
- If using GPT-generated input, you can instruct it to format the text with the required separator for easier splitting.

![Separator Example](/img/page-images/data-splitter-separator.png)

### Example Use Cases

- Parsing CSV-like structured data.
- Splitting user input fields formatted with a specific delimiter.
- Handling predefined lists where items are separated by a consistent symbol.

![Separator Example](/img/page-images/data-splitter-separator-with-flux.png)

## Output Options: Lists & Loops

### Output as a List

The **output_as_list** option allows the output to be wrapped inside a list.

- When `output_as_list` is enabled, the node returns a **single output** containing a list of all split values.
- Useful for nodes that expect **grouped lists** instead of separate items.

### Using Data Splitter for Loops

The **Data Splitter Node** integrates well with the [Subflow Loop Node](/docs/pro-features/api-builder/subflow-loop/) to process split data iteratively.

#### Example Workflow:

1. **Enable `output_as_list`** in the Data Splitter Node.
2. **Pass the resulting list** into the Subflow Loop Node’s `loop_over_fields` input.
3. The Subflow Loop processes each item **sequentially**, applying logic per element.

![Loop Example](/img/page-images/data-splitter-separator-with-loop.png)

## Best Practices

- **Use AI Mode** for short, clearly distinct inputs.
- **Use Separator Mode** when dealing with structured text that includes known delimiters.
- **Enable `output_as_list`** when downstream nodes require grouped lists (Subflow Loop).
- **Pair with the [Subflow Loop Node](/docs/pro-features/api-builder/subflow-loop/)** to iterate over split elements dynamically.

---

## Additional Resources

- [Subflow Node Documentation](/docs/pro-features/api-builder/subflow/)
- [Subflow Loop Node](/docs/pro-features/api-builder/subflow-loop/)
- [Flow API Reference](/docs/pro-features/api-builder/api-nodes/)
