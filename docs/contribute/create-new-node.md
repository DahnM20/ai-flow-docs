# Creating New Nodes

This section of the documentation describes how to create new nodes in the application using the simplest and quickest method. This method involves adding a node through a single Python file.

## Quick Start Guide

Follow these steps to create a new node:

### 1. Set Up the Node File

First, navigate to the appropriate directory for node scripts:

```plaintext
packages/backend/app/processors/components/extension
```

In this directory, create a new Python file using the naming format:

```plaintext
{name}_processor.py
```

### 2. Choose the Base Class

Your new node must extend one of two base classes, depending on its dependencies on user parameters:

- **SimpleExtensionProcessor**: Use this if the node does not depend on user-specific parameters, such as an API key.
- **APIContextExtensionProcessor**: Use this if the node requires context about the user, such as user-specific settings or keys.

### 3. Implement Your Node

Below are the template structures for each type of processor. Replace `YourProcessor` with the appropriate class name for your node, and ensure `processor_type` is a unique identifier for your node type.

#### Using SimpleExtensionProcessor

```python
from ...context.processor_context import ProcessorContext
from .extension_base_processor import APIContextExtensionProcessor

class YourProcessor(SimpleExtensionProcessor):
    processor_type = "your-processor"  # Unique identifier for this processor type

    def __init__(self, config):
        super().__init__(config)

    def get_schema(self):
        # Define the structure of your node here

    def process(self):
        # Implement your processing logic here
```

#### Using APIContextExtensionProcessor

```python
from ...context.processor_context import ProcessorContext
from .extension_base_processor import APIContextExtensionProcessor

class YourProcessor(APIContextExtensionProcessor):
    processor_type = "your-processor"  # Unique identifier for this processor type

    def __init__(self, config, context: ProcessorContext):
        super().__init__(config, context)

    def get_schema(self):
        # Define the structure of your node here

    def process(self):
        # Implement your processing logic here

    def cancel(self):
        # Optional: Implement cancellation logic here
```

## Define Node Structure

Each processor must define a schema to outline the fields it possesses and the outputs it returns.

To define the schema, utilize the classes located in the file `packages/backend/app/processors/components/model.py`.

**Important**: This file is generated automatically; please do not modify it.

Here is an example of a basic node with a single text field:

```python
def get_schema(self):
    urlInput = Field(
        name="url",
        label="url",  # Labels are required for display handles
        type="textfield",
        required=True,
        placeholder="URLPlaceholder",
        hasHandle=True,
    )

    fields = [urlInput]

    config = NodeConfig(
        nodeName="DocumentToText",
        processorType=self.processor_type,
        icon="FaFile",  # Icons are documented in...
        fields=fields,
        outputType="text",
        section="tools",
        helpMessage="documentToTextHelp",  # Message displayed on hover in the UI
        showHandlesNames=True,
    )

    return config
```

Additional field types such as select, sliders, switch, textarea, textfield, and options can be added. Consult the `packages/backend/app/processors/components/model.py` for detailed information.

For practical examples of existing nodes, refer to:

- `packages/backend/app/processors/components/extension/document_to_text_processor.py`
- `packages/backend/app/processors/components/extension/openai_text_to_speech_processor.py`

:::tip Note
Nodes outside the "extension" folder are constructed differently and should not be used as references for this tutorial.
:::

## Retrieve Inputs

After defining `get_schema()`, your node will appear in the web UI once you restart your server.

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

Note that processor context is initialized only when you extend `APIContextExtensionProcessor`.

## Implement Node Behavior

Now equipped with input retrieval and user parameter techniques, you can implement your node's behavior. Use a return statement to output the value that will be displayed in the app.

:::tip Note
To return an image or video, provide a URL and set your output type to `imageUrl` or `videoUrl` in your `NodeConfig`. If you lack a URL, you can utilize `self.get_storage()` to save your file on S3. For example:

```python
storage = self.get_storage()
url = storage.save("your-filename.png", data)
```

:::

## Optional: Adding New User Parameters to the App

To introduce new user parameters into the app, update the `packages/backend/config.yaml` file as follows:

```yaml
core:
  ################################
  ## The core params of the app ##
  ################################

my_extension: # Your new section
  my_extension_api_key:
    tag: "extension"
    description: "Description of what this parameter controls."

  my_extension_token:
    tag: "extension"
    description: "Description of what this parameter controls."
```

After updating the configuration and restarting the server, these new parameters will be visible in the UI's configuration menu.

## Cleanup: Adding Translation Variables

When creating your schema, many text-related fields such as node names, field placeholders, and help messages are included. To ensure these texts are translatable, you must use translation variables (langvars) in these fields.

```python
def get_schema(self):
    urlInput = Field(
        name="url",
        label="url",
        type="textfield",
        required=True,
        placeholder="URLPlaceholder",  # This is a langvar
        hasHandle=True,
    )

    fields = [urlInput]

    config = NodeConfig(
        nodeName="DocumentToText",  # This is a langvar
        processorType=self.processor_type,
        icon="FaFile",
        fields=fields,
        outputType="text",
        section="tools",
        helpMessage="documentToTextHelp",  # This is a langvar
        showHandlesNames=True,
    )

    return config
```

Translation variables need to be added in the localization file located at `packages/ui/public/locales/en/flow.json`. Add them as follows:

```json
{
  "URLPlaceholder": "Input a URL",
  "DocumentToText": "Document-to-Text",
  "documentToTextHelp": "Convert .pdf .txt .csv .json .html file to simple text"
}
```

With these translation variables set up, your node is ready for international use.

Feel free to submit a pull request to the [repository](https://github.com/DahnM20/ai-flow) to share your new node with others!
