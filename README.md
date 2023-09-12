
| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **.vscode**              | Contains VS Code specific settings                                                            |
| **.github**              | Contains GitHub settings and configurations, including the GitHub Actions workflows            |
| **dist**                 | Contains the distributable (or output) from your TypeScript build. This is the code you ship  |
| **node_modules**         | Contains all your npm dependencies                                                            |
| **src**                  | Contains your source code that will be compiled to the dist dir                               |
| **src/config**           | Passport authentication strategies and login middleware. Add other complex config code here   |
| **src/controllers**      | Controllers define functions that respond to various http requests                            |
| **src/models**           | Models define Mongoose schemas that will be used in storing and retrieving data from MongoDB  |
| **src/public**           | Static assets that will be used client side                                                   |
| **src/types**            | Holds .d.ts files not found on DefinitelyTyped. Covered more in this [section](#type-definition-dts-files)          |
| **src**/server.ts        | Entry point to your express app                                                               |
| **test**                 | Contains your tests. Separate from source because there is a different build process.         |
| **views**                | Views define how your app renders on the client. In this case we're using pug                 |
| .env.example             | API keys, tokens, passwords, database URI. Clone this, but don't check it in to public repos. |
| .travis.yml              | Used to configure Travis CI build                                                             |
| .copyStaticAssets.ts     | Build script that copies images, fonts, and JS libs to the dist folder                        |
| jest.config.js           | Used to configure Jest running tests written in TypeScript                                    |
| package.json             | File that contains npm dependencies as well as [build scripts](#what-if-a-library-isnt-on-definitelytyped)                          |
| tsconfig.json            | Config settings for compiling server code written in TypeScript                               |
| tsconfig.tests.json      | Config settings for compiling tests written in TypeScript                                     |
| .eslintrc                | Config settings for ESLint code style checking                                                |
| .eslintignore            | Config settings for paths to exclude from linting                                             |