# Notion Node

The Notion Node connects your workflows directly to Notion’s API. It currently supports **four single-page actions** that cover most day-to-day use cases. You’ll find many end-to-end templates in the [AI-Flow App](https://app.ai-flow.net/) (e.g., clip a webpage to Notion, append AI-generated notes). Start with those to see the node in a **real-world context**—this documentation serves as a **reference**.

---

## 1 · Search

![Search](/img/page-images/notion-search-page.png)

| Input                         | Description                                                                                                     |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------- |
| **Query**                     | Optional full-text search string.                                                                               |
| **Return simplified results** | **On** (default) → returns a compact list `{id, title, url, …}`.<br></br>**Off** → returns full Notion objects. |

Returns an array of pages or databases matching your query. Useful for retrieving page IDs and automating flows based on page names.

---

## 2 · Get Page

![Get Page](/img/page-images/notion-get-page.png)

| Input                         | Description                                                                                                       |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **Page ID**                   | The ID of the page to retrieve (`xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`).                                          |
| **Return plain-text content** | **On** (default) → flattens all blocks (regardless of depth) into plain text.<br></br>**Off** → returns raw JSON. |

Ideal when you need clean text output for LLMs or summaries.

---

## 3 · Create Page

![Create Page](/img/page-images/notion-create-page.png)

| Input                       | Description                                                                     |
| --------------------------- | ------------------------------------------------------------------------------- |
| **Parent Type**             | Where the new page will be created: **Database** or **Page**.                   |
| **Parent ID**               | ID of the database or parent page.                                              |
| **Title**                   | Title of the new page (plain text).                                             |
| **Extra Properties (JSON)** | Optional JSON object with additional properties—must match the database schema. |

Returns the created page object.

**Result**: the new page appears in the specified parent.

![Create Page](/img/page-images/notion-create-page-2.png)

---

## 4 · Append Block

![Append Block](/img/page-images/notion-append-block.png)

| Input        | Description                                                                                                                                                                                                |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Page ID**  | ID of the page (or block) to append to.                                                                                                                                                                    |
| **Children** | Accepts:<br></br>• **Plain text** — each blank line becomes a new paragraph.<br></br>• **Markdown** using `#`, `##`, `###`, `-` syntax.<br></br>• **Raw Notion block JSON** array for advanced formatting. |

The node automatically chunks long inputs (**≤100 blocks per call**, **≤1500 characters per block**) to avoid hitting Notion's API limits.

**Result with plain text (1 paragraph):**

![Create Page](/img/page-images/notion-append-block-2.png)

**Result with markdown:**

![Create Page](/img/page-images/notion-append-block-4.png)

---

## Field Specifics

### Extra Properties (Create Page)

Send any valid Notion-compatible JSON object for database fields. Example:

```json
{
  "Tags": { "multi_select": [{ "name": "Idea" }, { "name": "AI" }] },
  "Publish Date": { "date": { "start": "2025-05-20" } },
  "Status": { "select": { "name": "Draft" } }
}
```

### Children Formats

- **Markdown** is the simplest format for quick notes:

  ```
  # Big Idea
  - Point A
  - Point B
  ```

- For full control (e.g., tables, toggles), use full Notion block JSON format.
