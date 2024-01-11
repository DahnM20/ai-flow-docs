# Install with Windows .exe

### Prerequisites
- A Windows-based system.

### Getting the Executable
1. **Download the Executable**:
   - For a seamless local setup, navigate to the repository's **Releases** section and download the `.rar` file provided for the latest release.
   - This file contains all the code necessary for the application.
   - Extract the content of the `.rar`

### Installation & Running
1. **Executing the Server**:
   - Locate the `server.exe` file.
   
   - It's important to note that you might need to run `server.exe` with administrative privileges for proper functionality. You can try without first, but if it doesn't work then :
     1. Right-click on `server.exe`.
     2. Select 'Run as administrator'.

   - You'll need to update the REPLICATE_API_KEY in the `.env` file to use the Replicate Node.  This API key is used exclusively for fetching model data.

2. **Accessing the Server**:
   - With the server running, open your preferred web browser and navigate to:
     ```
     http://localhost:5000
     ```