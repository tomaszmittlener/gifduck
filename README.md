# gifDuck

gifDuck gets and displays GIF and Images from multiple data sources. Currently supported services:

- [Giphy](https://developers.giphy.com/docs/)
- [Pixabay](https://pixabay.com/api/docs/)

App is setup with yarn workspaces, typescript, and lerna.

## How to use

### Installation

- [TODO]

### Running development app

- [TODO]

### Running production app

- [TODO]

## Setup explained

### Tooling

- gifDuck as monorepo is installed using [yarn](https://github.com/yarnpkg/yarn).

  - Packages are automatically linked together, meaning you can do cross-package work within the repo.
  - `devDependencies` are common, and only appear in the root `package.json`. Easier to manage and upgrade.
  - Each package has its own `scripts` and `dependencies`. They are being installed in the root `node_modules`, using the same deduping mechanism `yarn` uses for single packages.

### Included packages

- **@gifduck/client**

  - [React](https://github.com/facebook/react) application.

- **@gifduck/server**

  - [Express](https://github.com/expressjs/express) application.

- **@gifduck/common-config**
- common configuration files library shared across @gifduck packages
- **@gifduck/common-types**
- [TypeScript](https://github.com/Microsoft/TypeScript) types files library shared across @gifduck packages.

### Basic structure and configurations

```
.github                         // CI flow configuration (GitHub Actions)
packages/
  some-package/
    dist/                       // folder with built app
        config/
        webpack.dev.ts          // webpack configuration file for development environemnt
        webpack.prod.ts         // webpack configuration file for production environemnt
    src/
        index.tsx
        package.json            // package-specific deps and scripts
    README.md                   // shown in npmjs.com. included in npm artifact
    tsconfig.json               // typescript configuration
    .eslintrc                   // eslint (linter) configuration extended from common-config package
    .prettierrc.js              // prettier (formatter) extended from common-ccommon package
    .babel.config.js            // babel (compiler) extended from common-common package
    common/
        some-common-package/
        src/
            index.ts
            package.json        // package-specific deps and scripts

    .editorconfig               // editorconfig configuration file
    .eslintignore               // eslint (linter) ignored directories/files
    .eslintrc                   // eslint (linter) configuration
    .gitignore                  // github's default node gitignore with customizations
    .prettierrc.js              // prettier (formatter) configuration
    lerna.json                  // lerna configuration
    package.json                // common dev deps and workspace-wide scripts
    README.md                   // workspace-wide information. shown in github
    yarn.lock                   // the only lock file in the repo. all packages combined
```

### Dependency management

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

Packages depend on sibling packages within the monorepo. For example, in this repo, `@gifduck/client depends on`@gifcudk/common-config`. This relationship is just a normal dependency, and can be described in the`package.json`of`app` like so:

```json
{
  "name": "@gifduck/client",
  "dependencies": {
    "@gifduck/common-config": "<package version>"
  }
}
```

### Gifduck roadmap

Basic workflow described i goals to be achieved:

- [x] [General] planning:
  - plan structure, tools, dependencies, steps to be taken
  - goal: create app and documentation skeleton, figure out plan of work
- [x] [General] basic project setup:
  - init lerna monorepo with shared config and tools repositories
  - goal: structured repositories, ready for configuration
- [ ] [General] add basic configuration + simple apps
  - setup: eslint, priettier, webpack, tsconfig, commits, jest
  - goal: client and server apps work on dev and prod
- [ ] [FE] setup

  - create Client folders structure, layout base, grid, services, routing
  - goal: app is ready to develop needed views and features

- [ ] [FE] show mock data
  - goal: display views and images with mocks, decide what will be needed from backend
- [ ] [BE] setup
  - folders structure, logging, error handling, routing, controllers, services
  - goal: server should be running and responding with mock data on request
- [ ] [BE] respond with real data
  - connect to any service and respond with correctly structured data
  - goal: Client ready to receive real data
- [ ] [FE] Search feature + layout upgrade
  - Client should connect to the real service and display data correctly, further layout work)
  - goal: Client should be able communicate with server - search and display real data on search request
- [ ] [BE] Pin up all services
  - server supports both providers)
  - goal: Server makes search to both services and to all at once
- [ ] [FE] Multiple services support
  - connect to all services, add options to search feature
  - goal: Client can search and display images from both services or from all at once

Example Further development features:

- [ ] [BE] Introduce pagination
  - TODO
- [ ] [FE] Introduce pagination
  - TODO
