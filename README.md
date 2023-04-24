# Todo List App

#### I put my task on AWS EC2 instance.
#### SERVER PART: http://ec2-18-158-223-9.eu-central-1.compute.amazonaws.com:8080
#### CLIENT PART: http://ec2-18-158-223-9.eu-central-1.compute.amazonaws.com/

## Table of Contents
- [Installation](#installation)
- [Important Packages](#important-packages)
- [Docker Usage](#docker-usage)
- [Usage](#usage)
- [Code Styles](#code-styles)
- [Contributing](#contributing)
- [Note](#note)

## Installation

#### Clone this repository to your local machine. https://github.com/aslanyan66/todo-client

### Without Docker

#### To install the Todo List application without Docker,you must have the following installed on your machine:

#### `Node.js` (version 16 or higher)
#### `Yarn` package manager (version 1 or higher)
### Follow these steps to install the Todo List application:

#### 1. Navigate to the cloned directory in your terminal.
#### 2. Run `yarn install` to install the necessary dependencies.
#### 3. Run `yarn dev` to start the application.
#### 4. Open a web browser and go to http://localhost:3000 to view the application.

### To build the app for production, run:
#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Important Packages

#### ● Typescript
#### ● apollo-client
#### ● graphql
#### ● graphql-subscriptions
#### ● graphql-ws
#### ● Material UI


## Docker Usage

#### To install the Todo List application with Docker, you must have the following installed on your machine:

### `Docker` `Docker-Compose`

### Development
#### To run the application in development mode with Docker, follow these steps:

#### 1. Navigate to the cloned directory in your terminal.
#### 2. Run `docker-compose up -d app-dev` to start the application in development mode. `-d or --detach` means that the container will run in the background
#### 3. Open a web browser and go to http://localhost:3000 to view the application.

### Production
#### To run the application in production mode with Docker, follow these steps:

#### 1. Navigate to the cloned directory in your terminal.
#### 2. Run `docker-compose up -d app-prod` to build and start the application in production mode. `-d or --detach` means that the container will run in the background
#### 3. Open a web browser and go to http://localhost to view the application.

## Usage

#### Once the application is running, you can create, read, update, delete a todos.
#### The frontend of this application is built with React and uses Apollo Client for handling GraphQL queries, mutations, and subscriptions. The application also uses Apollo WebSocket link along with HTTP link, which subscribes to backend data and listens for data creation events from the backend every 3 minutes.
#### The application uses optimistic renders to provide a smooth user experience, and the interval for listening to backend data can be configured as per specific requirements from the backend.

## Code Styles
### To maintain code style consistency, you can use the following scripts: before committing changes:

#### `lint`: Use this script to check your code for errors and warnings. It uses ESLint and checks all JavaScript, TypeScript, JSON, and JSX files in the src directory.
#### `lint:fix`: Use this script to automatically fix some of the issues reported by the lint script.
#### `format`: Use this script to format your code automatically using Prettier. It formats all JavaScript, TypeScript, JSON, CSS, SCSS, and Markdown files in the src directory based on the configuration in .prettierrc file.

#### ● To run any of these scripts, simply type the corresponding command in your terminal:

#### `yarn lint`
#### `yarn lint:fix`
#### `yarn format`

## Note

#### ● Project does not include a configured Webpack and Babel for building the application.
#### ● Project does not include an authentication feature implemented.
#### ● Project does not include an error handling.
#### ● Project does not include a unit tests.
#### ● Project does not include a CI/CD.

#### However, if I had more time, I would have implemented these features.

## Contributing
Contributions are always welcome! If you find a bug or have a feature request, please open an issue. If you would like to contribute code, please fork the repository and submit a pull request.

