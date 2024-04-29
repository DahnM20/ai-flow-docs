# Install with Windows .exe

### Prerequisitess

- A Windows-based system.

### With the Desktop App (Recommended)

You can download the application from the following link: [Releases AI-FLOW](https://ai-flow.net/release.html).

To use the desktop app, simply run the .exe file after downloading. This executable will launch a local server to run AI-FLOW, allowing you to access the user interface directly as a Windows application.

:::tip Note

You'll need to set REPLICATE_API_KEY in your env to be able to use the Replicate Node.

Or, update the REPLICATE_API_KEY in `ai-flow-win32-x64/resources/server/.env`

:::

---

### With the server.exe release

You can download the server release here : [Releases AI-FLOW](https://ai-flow.net/release.html).

1. **Download the Executable**:
   - Download the `.rar` file provided for the latest release.
   - This file contains all the code necessary for the application.
   - Extract the content of the `.rar`

### Installation & Running

1. **Executing the Server**:

   - Locate the `server.exe` file.

   - It's important to note that you might need to run `server.exe` with administrative privileges for proper functionality. You can try without first, but if it doesn't work then :

     1. Right-click on `server.exe`.
     2. Select 'Run as administrator'.

   - You'll need to update the REPLICATE_API_KEY in the `.env` file to use the Replicate Node. This API key is used exclusively for fetching model data.

2. **Accessing the Server**:
   - With the server running, open your preferred web browser and navigate to:
     ```
     http://localhost:5000
     ```
