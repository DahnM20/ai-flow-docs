---
sidebar_position: 5
---

# Split input with AI

## Data Splitter

### AI Mode

This tool, leveraging the advanced capabilities of GPT-4o, specializes in dissecting and organizing inputs into distinct segments.

It is particularly adept at handling inputs that inherently possess logically separated concepts. For instance:

Idea 1 : An elephant

Idea 2 : A dolphin

Idea 3 : A dog

Alternatively, it can process inputs formatted in a series like:

An elephant, A dolphin, A dog

Upon receiving such structured data, this node effectively divides the input into 'N' distinct outputs, each corresponding to a unique idea or concept.

![Data Splitter](/img/page-images/split-input/1.png)

:::danger Warning

Please note, the efficacy of segmentation may vary. Inputs that are overly complex or excessively lengthy could lead to less-than-perfect splitting, as the system may struggle with logically partitioning such data.

:::

### Manual Mode

In manual mode, you can specify a separator. The input will be split using this separator.

For instance:

```
An elephant;A dolphin;A dog
```

With the separator set to `;` this will produce 3 outputs.

You can refer to the following blog posts for introductions and real use-case scenarios:

- [How to Automate Story Generation - Part 2](../../../blog/automate-story-creation-2)
