<!-- ### Cook Book with Prompt Engineering for initializing JS projects

## Create a project directory

mkdir my-project
cd my-project

## Initialize Git SCM. Most widely used version control management system.

git init

## Initialize npm the package manager for Java Script projects. Initialize npm to create a package.json file which will contain metadata about your project and its dependencies.

npm init -y

## Install Development Dependencies: Depending on your project needs, you might want to install development dependencies such as testing frameworks, linters, etc. For example, let's install Jest for testing.

npm install --save-dev jest

## Create Project Structure: Create directories to organize your code. A common structure might look like this: or Refer some JS projects hosted in Github to best align with the project you are working on.

my-project/
├── src/              # Source code
│   └── index.js      # Main JavaScript file
├── tests/            # Test files
│   └── index.test.js # Example test file
├── .gitignore        # Specify files/directories to ignore in Git
└── package.json      # Project metadata and dependencies

## Create a README.md: Write a README file to document your project, including installation instructions, usage, and any other relevant information.


## Start Coding: Now you're ready to start coding! Write your JavaScript code in the src directory and your tests in the tests directory. -->

Initialize JS project:

* Type Ctrl + I to open GitHub Co-pilot in VSCode. Prompt for "npm initialization".
A package.json file will be created.

* Prompt "Create a widely adapted js app front end template with project structure and code".

    - JSCookbook
    - src
        - components
        - services
        - utils
    - public
        - index.html
        - favicon.ico
    - tests
    - node_modules
    - package.json
    - package-lock.json
    - .gitignore
    - README.md

and the code that should go into the files will also be provided by the prompt itself.

Use this structure to align with the commonly used code base structure.
