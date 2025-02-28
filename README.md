## 🎯 AI Snake Game with Docker & TensorFlow.js

1. [ README Content](#sample-readme-content)
   - [Project Title](#project-title)
   - [Project Structure](#project-structure)
   - [Setup Instructions](#setup-instructions)
   - [Configuration](#configuration)  
2. [License](#license)
3. [Contributing](#contributing)

## Overview

This project demonstrates an AI-powered Snake game with TensorFlow.js. Game allowing users to either play manually or let the AI control the snake.

<img src="https://github.com/user-attachments/assets/6657078f-be16-4679-bb0a-565e6c8e1d0a" width="300">


## Project Structure
[Describe the directory structure of the project repository]

- **index.html** - Main webpage hosting the game interface & loads library
- **ai.js** - AI model integration and decision-making
- **script.js** - Game logic and user interactions
- **style.css** - Theme and color settings
- **Dockerfile** - File to build the container image

## Setup Instructions


### 1. Clone the repository

 ```
 git clone https://github.com/dockersamples/Snake-AI-TensorFlow-Docker.git
 ```

### 2. Navigate to the project directory:

```
cd Snake-AI-TensorFlow-Docker
```

### 3. Install http-server
        
```
npm i http-server
```

OR
        
```
pip install httpserver
```

### 4. Run command `http-server` root where `index.html` 

```
http-server
```
      
OR
      
```
httpserver
```

### 5. Open browser `http://localhost:{port}` as per http-server 

### 6. Click on Start Game

#### Building the Docker Image

```
docker build --platform linux/amd64,linux/arm64  -t sanke-game-ai:v1 .
```

#### Running  the Container

```
docker run -p 8080:80 sanke-game-ai:v1
```

Open URL in browser

`http://localhost:8080`

## License
This project is licensed under the [Apache 2.0 License](/LICENSE).

## Contributing

Since this project is intended to support a specific use case guide, contributions are limited to bug fixes or security issues. If you have a question, feel free to open an issue!

If you have any questions, please contact `#docs` on the [Docker Community Slack](https://communityinviter.com/apps/dockercommunity/docker-community).

