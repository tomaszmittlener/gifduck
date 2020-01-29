# gifDuck

gifDuck gets and displays GIF and Images from multiple data sources. Currently supported services:

- [Giphy](https://developers.giphy.com/docs/)
- [Pixabay](https://pixabay.com/api/docs/)

App is setup with yarn workspaces, typescript, and lerna.

## How to use

### Requirements:

- node v12 or higher (prod server is compiled to be compatible with node v.10)
- yarn v1.21.1 or higher

### Installation

1. get the repo

   ```
   $ git clone git@github.com:tomaszmittlener/gifduck.git
   $ cd gifduck
   ```

2. add environment variables [see here](#environment-variables)

### Running the app

#### development

- run client development mode: `yarn dev:client`
- run server development mode: `yarn dev:server`

#### production

- building:

  - build client: `yarn build:client`
  - build server: `yarn build:server`

- running the production apps:
  - start server: `yarn start:server`
  - start client: open `packages/client/dist/index.html` in browser

## Environment variables

Each package keeps its environment variables separately. to use them add .env files to `packages/<package-name>`

- **@gifduck/client**

  ```
  IMAGES_SEARCH_BAES_URL              // base url to images service
  ```

- **@gifduck/server**

  ```
  PORT                                // port to run server
  APP_ID                              // id of the app. will be ussed for logging
  LOG_LEVEL                           // 'fatal', 'error', 'warn', 'info', 'debug', 'trace' or 'silent'
  GIPHY_API_KEY                       // giphy service api key
  PIXABAY_API_KEY                     // pixabay service api key
  ```

## Setup explained

- gifDuck as monorepo is installed using [yarn](https://github.com/yarnpkg/yarn).

  - Packages are automatically linked together, meaning you can do cross-package work within the repo.
  - `devDependencies` are common, and only appear in the root `package.json`. Easier to manage and upgrade.
  - Each package has its own `scripts` and `dependencies`. They are being installed in the root `node_modules`, using the same deduping mechanism `yarn` uses for single packages.

### Included packages

- **@gifduck/client**

  - [React](https://github.com/facebook/react) application.

- **@gifduck/server**

  - [Express](https://github.com/expressjs/express) application.

- **@gifduck/types**
  - [TypeScript](https://github.com/Microsoft/TypeScript) types files library shared across @gifduck packages.
- **@gifduck/config-** configuration files shared across packages. All dependencies are peerDependencies, so client page needs to install this packages locally.

  - **@gifduck/config-babel**
    - common babel configuration files shared across @gifduck packages
      - babel.config.js
  - **@gifduck/config-jest**

    - common jest configuration files shared across @gifduck packages
      - eslintrc.js

  - **@gifduck/config-eslint**

    - common eslint configuration files shared across @gifduck packages
      - jest.config.js

  - **@gifduck/config-prettier**
    - common prettier configuration files shared across @gifduck packages
      - prettierrc.js
  - **@gifduck/config-tsconfig**
    - common tsconfig configuration files shared across @gifduck packages
      - tsconfig.js

### Basic structure and configurations

```
packages/
    somePackage/
        dist/                       // folder with built app
        config/
            webpack.dev.ts          // webpack configuration file for development environemnt
            webpack.prod.ts         // webpack configuration file for production environemnt
        coverage                    // test coverage files
        src/
            components/
                foo/
                    index.ts        // main file
                    foo.test.ts     // test file with jests for index.ts
            index.tsx
        package.json                // package-specific deps and scripts
        README.md                   // shown in npmjs.com. included in npm artifact [TODO]
        tsconfig.json               // typescript configuration
        .eslintrc                   // eslint (linter) configuration extended from config-eslint package
        .prettierrc.js              // prettier (formatter) extended from config-prettier package
        .babel.config.js            // babel (compiler) extended from config-babel package
        .jest.config.js             // jest (testing framework) extended from config-jest package
        .setupTests.js              // jest (testing framework) additional packages setup for all the tests in package
        .eslintignore               // eslint (linter) ignored directories/files
        package.json                // common dev deps and workspace-wide scripts
        .env                        // package specific environment variables, not shared in the repository
    common/                         // keeps independent packages, shared across monorepo
        some-common-package/
            package.json
        config/                     // common dev deps and workspace-wide scripts
            some-config-package/
                package.json
.editorconfig                   // editorconfig configuration file
.eslintignore                   // eslint (linter) ignored directories/files
.prettierignore                 // prettier (formatter) ignored directories/files
.gitignore                      // github's default node gitignore with customizations
.prettierrc.js                  // prettier (formatter) configuration  extended from config-prettier package
lerna.json                      // lerna configuration
package.json                    // common dev deps and workspace-wide scripts
README.md                       // workspace-wide information. shown in github
yarn.lock                       // the only lock file in the repo. all packages combined
```

### Scripts

Each script command should be run using `yarn`

Global:

- `format` runs prettier for the whole project

Package scoped:

- `test:<package-name>` runs tests for the package
- `check:<package-name>` runs type check for the package
- `dev:<package-name>` runs package in development mode
- `build:<package-name>` builds package
- `start:<package-name>` starts package in production mode

### Dependency management (general monorepo rules)

`devDependencies` are shared between all packages within the monorepo.

Dependency structure:

- `devDependencies` are placed in the root `package.json`
- `dependencies` and `peerDependencies` are placed in the `package.json` of the relevant package requiring them, as each package is published separately

New `devDependencies` can be added to the root `package.json` using yarn:

```sh
yarn add <package name> --dev -W
```

New `dependencies` can be added to the specific package using lerna scoped command:

```
lerna add --scope @gifduck/worspace-name <package name>
```

Packages depend on sibling packages within the monorepo. For example, in this repo, `@gifduck/client depends on`@gifcudk/babel-config`. This relationship is just a normal dependency, and can be described in the`package.json`of`app` like so:

```json
{
  "name": "@gifduck/client",
  "devDependencies": {
    "@gifduck/config-babel": "<package version>"
  }
}
```

## Gifduck task manager

### Basic workflow:

- [x] [General] planning:

  - plan structure, tools, dependencies, steps to be taken
  - goal: create app and documentation skeleton, figure out plan of work

- [x] [General] basic project setup:

  - init lerna monorepo with shared config and tools repositories
  - goal: structured repositories, ready for configuration

- [x] [General] add basic configuration + simple apps

  - setup: eslint, priettier, webpack, tsconfig, commits, jest
  - goal: client and server apps work on dev and prod

- [x] [General] setup tests

  - setup jest and coverage report
  - goal: client and server are able to run tests and generate coverage

- [x] [FE] setup

  - create Client folders structure, layout base, grid, services, routing
  - goal: app is ready to develop needed views and features

- [x] [FE] show mock data

  - goal: display views and images with mocks, decide what will be needed from backend

- [x] [BE] setup

  - folders structure, logging, error handling, routing, controllers, services
  - goal: server should be running and responding with mock data on request

- [x] [BE] respond with real data

  - connect to any service and respond with correctly structured data
  - goal: Client ready to receive real data

- [x] [FE] Search feature + layout upgrade

  - Client should connect to the real service and display data correctly, further layout work)
  - goal: Client should be able communicate with server - search and display real data on search request

- [x] [BE] Pin up all services

  - server supports both providers
  - goal: Server makes search to both services at once

- [x] [BE] Multiple services support (all)

  - connect to all services, add options to search feature

- [ ] [BE] Multiple services support (split)
  - add source param to query and let client choose source of search (gifs/images)
  - goal: Client can search and display images from both services separately
- [ ] [FE] Multiple services support (split)
  - add source param to query and let client choose source of search (gifs/images)
  - goal: Client can search and display images from both services separately

### Example Further development features:

- [ ] [BE] Introduce pagination

  - find the optimal way to make pagination for both services at once
  - goal: client can paginate through results

- [ ] [BE] Introduce image type filter
  - let user decide which type of image he wants to search
  - goal: client can choose search between gifs and images

### Things to do:

- [ ] [General] setup jest to collect global coverage
- [ ] [General] add Readme for each package
- [ ] [General] make a common build pipeline for all packages using lerna scripts
- [ ] [General] adjust configuration for npm publishing
- [ ] [Server] add missing tests
- [ ] [Client] add missing tests
- [ ] [Client] components/image - should be more generic and support other scenarios (see comments in component)
- [ ] [Client] images should have alt text for accessibility
- [ ] [Server] rename "IMAGES_SEARCH_BAES_URL" env to "IMAGES_SEARCH_BASE_URL"
