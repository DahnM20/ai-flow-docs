# Install with Docker 🐳

### Prerequisites
1. Ensure you have [Docker](https://www.docker.com/get-started) and [Docker Compose](https://docs.docker.com/compose/install/) installed on your system.

### Configuration
1. **Navigate to the Docker Directory**:
   ```bash
   cd ./docker
   ```

2. **Modify Configuration (if necessary)**:
   - The `docker-compose.yml` file contains various settings, including the ports the services will run on. Review and update if needed. Particularly, you might want to adjust the `PORTS` configuration depending on your needs.

### Running the Application
1. **Start the Services**:
   - To start the application in the foreground (logs will display in the terminal):
     ```bash
     docker-compose up
     ```
   - To start the application in the background (detached mode):
     ```bash
     docker-compose up -d
     ```

2. **Accessing the Application**:
   - Once the services have started, open your browser and navigate to:
     ```
     http://localhost:80
     ```
   - If you've changed the port in the `.yml` file, make sure to use that port instead.

### Stopping the Application
1. **Stop the Services**:
   - When you want to stop the application and its related services, use CTRL+C in the terminal. 
   - If you're in detached mode, use the following command:
     ```bash
     docker-compose stop
     ```
