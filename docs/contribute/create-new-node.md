# Creating New Nodes

This section of the documentation describes how to create new nodes in the application using the simplest and quickest method. This method involves adding a node through a single Python file.

## Quick Start Guide

Follow these steps to create a new node and his associated processor:

### 1. Set Up the Node File

First, navigate to the appropriate directory :

```plaintext
packages/backend/app/processors/components/extension
```

In this directory, create a new Python file using the naming format:

```plaintext
{name}_processor.py
```

### 2. Choose the Base Class

Your new node must extend one of two base classes, depending on its dependencies on user parameters:

- **BasicExtensionProcessor**: Use this if the node does not depend on user-specific parameters, such as an API key.
- **ContextAwareExtensionProcessor**: Use this if the node requires context about the user, such as user-specific settings or keys.

### 3. Implement Your Node

Below are the template structures for each type of processor. Replace `YourProcessor` with the appropriate class name for your node, and ensure `processor_type` is a unique identifier for your node type.

#### Using BasicExtensionProcessor

```python
from ...context.processor_context import ProcessorContext
from .extension_processor import BasicExtensionProcessor

class YourProcessor(BasicExtensionProcessor):
    processor_type = "your-processor"  # Unique identifier for this processor type

    def __init__(self, config):
        super().__init__(config)

    def get_node_config(self):
        # Define the structure of your node here

    def process(self):
        # Implement your processing logic here
```

#### Using ContextAwareExtensionProcessor

```python
from ...context.processor_context import ProcessorContext
from .extension_processor import ContextAwareExtensionProcessor

class YourProcessor(ContextAwareExtensionProcessor):
    processor_type = "your-processor"  # Unique identifier for this processor type

    def __init__(self, config, context: ProcessorContext):
        super().__init__(config, context)

    def get_node_config(self):
        # Define the structure of your node here

    def process(self):
        # Implement your processing logic here

    def cancel(self):
        # Optional: Implement cancellation logic here
```

## Define Node Structure

Each processor must define a schema to outline the fields it possesses and the outputs it returns.

The `get_node_config()` method define what the node will look like in the UI.

To define the node configuration, utilize the builders located in the file `packages/backend/app/processors/components/node_config_builder.py`.

**Important**: This file is generated automatically; please do not modify it.

Here is an example of a basic node with a single text field:

```python
def get_node_config(self) -> NodeConfig:
        urlField = (
            FieldBuilder()
            .set_name("document_url")
            .set_label("document_url")
            .set_type("textfield")
            .set_required(True)
            .set_placeholder("URLPlaceholder")
            .set_has_handle(True)
            .build()
        )

        return (
            NodeConfigBuilder()
            .set_node_name("DocumentToText")
            .set_processor_type(self.processor_type)
            .set_icon("FaFile")
            .set_section("tools")
            .set_help_message("documentToTextHelp")
            .set_show_handles(True)
            .set_output_type("text")
            .add_field(urlField)
            .build()
        )
```

Additional field types such as select, sliders, switch, textarea, textfield, and options can be added. Consult the `packages/backend/app/processors/components/model.py` for detailed information.

For practical examples of existing nodes, refer to:

- `packages/backend/app/processors/components/extension/document_to_text_processor.py`
- `packages/backend/app/processors/components/extension/stable_diffusion_three_processor.py`
- `packages/backend/app/processors/components/extension/openai_text_to_speech_processor.py` (This one is using objects directly and not the builders)

:::tip Note
Nodes outside the "extension" folder are constructed differently and should not be used as references for this tutorial.
:::

## Retrieve Inputs

After defining `get_node_config()`, your node will appear in the web UI once you restart your server.

The primary method for processing node inputs is:

```python
def process(self):
    # Your logic here
```

This method is activated when your node is run.

To retrieve your inputs, use the field names defined in your schema like this:

```python
def process(self):
    url = self.get_input_by_name("url")
```

This method fetches the input value, whether it is directly set in the node or fed from another node.

:::tip Note
If the input value originates from another node, it is crucial to retrieve it within the `process()` method rather than in the constructor, as it won't be available earlier.
:::

## Retrieve User Parameters

User parameters are accessible via the Configuration menu of the UI, such as API keys for services like OpenAI or Replicate:

```python
def process(self):
    api_key = self._processor_context.get_value("openai_api_key")
    client = OpenAI(api_key=api_key)
```

To determine the exact key name to retrieve a parameter, refer to the `packages/backend/config.yaml`.

Note that processor context is initialized only when you extend `ContextAwareExtensionProcessor`.

## Implement Node Behavior

Now equipped with input retrieval and user parameters, you can implement your node's behavior. Use a return statement to output the value that will be displayed in the app.

:::tip Note
To return an image or video, provide a URL and set your output type to `imageUrl` or `videoUrl` in your `NodeConfig`. If you lack a URL, you can utilize `self.get_storage()` to save your file on S3 (if you have configured it). For example:

```python
storage = self.get_storage()
url = storage.save("your-filename.png", data)
```

:::

## Optional: Adding New User Parameters to the App

Please refer to the section [Adding New Parameters](add-new-parameters)

## Optional: Adding new library

This project uses poetry as dependency management.

If you need to add a new dependency, you should navigate to `ai-flow/packages/backend` directory in the terminal and use the `poetry add` command.

For example, if you want to include a library for making HTTP requests, you might add requests like this:

`poetry add requests`

## Final Touch: Adding Translation Variables

When creating your schema, it's common to include text-related fields such as node names, field placeholders, and help messages. To make these texts translatable, you should use translation variables in these fields.

```python
    def get_node_config(self) -> NodeConfig:
        urlField = (
            FieldBuilder()
            .set_name("document_url")
            .set_label("document_url")
            .set_type("textfield")
            .set_required(True)
            .set_placeholder("URLPlaceholder") // Translation variable here
            .set_has_handle(True)
            .build()
        )

        return (
            NodeConfigBuilder()
            .set_node_name("DocumentToText") // Translation variable here
            .set_processor_type(self.processor_type)
            .set_icon("FaFile")
            .set_section("tools")
            .set_help_message("documentToTextHelp")  // Translation variable here
            .set_show_handles(True)
            .set_output_type("text")
            .add_field(urlField)
            .build()
        )
```

Add the translation variables to the localization file located at `packages/ui/public/locales/en/flow.json` as shown below:

```json
{
  "URLPlaceholder": "Enter a URL",
  "DocumentToText": "Document to Text",
  "documentToTextHelp": "Converts .pdf, .txt, .csv, .json, and .html files to plain text"
}
```

With these translation variables in place, your node is ready for international use.

Feel free to submit a pull request to the [repository](https://github.com/DahnM20/ai-flow) to share your new node with others!
