# Airtable

The Airtable Node provides seamless integration between your workflows and Airtable, enabling you to interact directly with your Airtable bases and tables through a straightforward interface. This node supports several essential operations to manage and automate your Airtable data.

## Supported Methods

### 1. List Records

Retrieve records from an Airtable table.

- **Base ID:** The unique identifier of your Airtable base.
- **Table Name:** The name of the Airtable table.
- **Max Records:** Limit the number of records retrieved (default is 100).
- **Sort:** Sort records based on specific fields and direction.
- **Filter by Formula:** Apply Airtable formula filters to refine results.
- **View:** Specify an Airtable view to fetch records from.
- **Separate Output:** Output each record separately if enabled.

### 2. Create Records

Insert new records into your Airtable table.

- **Base ID:** Your Airtable base identifier.
- **Table Name:** Target table for the new records.
- **Records:** JSON-formatted data representing the records to create.

### 3. Get Record

Fetch details of a single Airtable record.

- **Base ID:** Airtable base identifier.
- **Table Name:** Name of the table containing the record.
- **Record ID:** The unique identifier of the record you wish to retrieve.

### 4. Update Record

Modify existing records in your Airtable table.

- **Base ID:** Airtable base identifier.
- **Table Name:** Name of the table containing the record.
- **Record ID:** Identifier of the record to update.
- **Fields:** JSON-formatted fields representing the updates to apply.

Here's an example on how to use these methods :

![Instant Tools Launcher Result](/img/page-images/airtable-methods.png)

## How It Works

- **Dynamic Configuration:** The node dynamically adapts based on your selected method, displaying relevant input fields and options.
- **Secure Authentication:** Utilizes your Airtable API key for authentication, ensuring secure interaction with your data.
- **Flexible Output:** Outputs responses in JSON format, providing easy integration and manipulation in subsequent workflow steps.

Note that these outputs can be used as a **Subflow Loop** input. You can find a dedicated template for this in the [AI-Flow App](https://app.ai-flow.net/).

![Instant Tools Launcher Result](/img/page-images/airtable-loop.png)

## Use Cases

- Quickly retrieve and process Airtable data within your workflows.
- Automatically create records from workflow-generated data.
- Maintain data consistency by regularly updating existing records.
