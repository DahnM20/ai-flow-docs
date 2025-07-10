# Working with Lists

Most AI-FLOW nodes receive and emit _single_ items. When you need to pass several items at once—multiple images, Strings, URLs, etc.—you can turn any compatible field into **a list**. Lists simplify your graphs, reduce node clutter, and unlock looping in subflows.

## 1. Turning a Field into a List

_Example: Sending several images to a single GPT node._

1. **Default (single-item) setup** – add extra image fields and connect each to its own _File Upload_ node.
   ![Three separate image inputs](/img/page-images/list-2.png)

2. **List setup** – convert the _image_ field to a list, then connect one _List_ node that outputs an array of files.
   ![Single list input](/img/page-images/list-3.png)

Comparison:
![Without List VS With List](/img/page-images/list-1.png)

## 2. Iterating with Lists + Subflow Loops

Lists pair perfectly with **Subflow Loop** to run the same logic over every list element.

| Scenario                              | Setup                                                                     | What Happens                                                                                                                     |
| ------------------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **Single list** (iterate over images) | Select **image** as the _loop-over_ field.                                | The subflow runs once per image; the _prompt_ stays constant. ![Loop with list example](/img/page-images/list-4.png)             |
| **Parallel lists** (images + prompts) | Provide two lists, choose **image** _and_ **prompt** as loop-over fields. | On each iteration the node receives _image \[i]_ and _prompt \[i]_. ![Loop with two list as inputs](/img/page-images/list-5.png) |

Result preview:
![Loop result](/img/page-images/list-6.png)

> **Tip:** Two nodes—one _List_ and one _Subflow Loop_—often replace half a dozen manual connections.

## 3. Nodes That **Return** Lists

These nodes can output arrays directly, making chaining easy:

- **Subflow Loop** (collects iteration results)
- **Data Splitter**
- **Regex Extract**
- **JSON Tools** and **List Tools**
- **Google Search**

## 4. When a Field _Doesn’t_ Accept Lists

If you feed a list into a field that expects a single item:

- AI-FLOW serialises the list to plain text (JSON).
- The receiving node may throw a type error (e.g., if it needs a file URL) or just treat the text literally.

## 5. Lists Are JSON Under the Hood

Every list travels through the graph as standard JSON. Leverage **JSON Tools** to:

```json
["image1.png", "image2.png", "image3.png"]
```

- filter, map, or reduce elements
- merge or split arrays
- transform structures for downstream nodes

![List and JSON Tools](/img/page-images/list-7.png)

### Key Takeaways

1. **Convert, don’t duplicate.** One list field is cleaner than many single-item fields.
2. **Loop smart.** Combine _List_ nodes with _Subflow Loop_ for effortless iteration.
3. **Mind compatibility.** Pass lists only to fields that understand them.

Use lists well, and your AI-FLOW pipelines stay compact, readable, and scalable.

## Additional Resources

For more advanced configurations and detailed guidance, refer to the following resources:

- [Subflow Loop](/docs/pro-features/api-builder/subflow-loop/)
