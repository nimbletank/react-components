<h1 align="center">
  Nimbletank's React.js Components

  [![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
  [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-yellow.svg?style=flat-square)](https://standardjs.com)
  ![](https://img.shields.io/badge/javascript-ES6-ffb400.svg?style=flat-square)
  ![](https://img.shields.io/badge/licence-MIT-blue.svg?style=flat-square)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
</h1>

> Style agnostic React components

Maintained by [Zander Martineau](https://github.com/mrmartineau)

```sh
npm install @nimbletank/react-components --save

yarn add @nimbletank/react-components
```

## Available components
* [Button](components/Button) - `import {Button} from 'nimbletank-components'`
* [Container](components/Container) - `import {Container} from 'nimbletank-components'`
* [Heading](components/Heading) - `import {Heading} from 'nimbletank-components'`
 * [H1](components/Heading) - `import {H1} from 'nimbletank-components'`
 * [H2](components/Heading) - `import {H2} from 'nimbletank-components'`
 * [H3](components/Heading) - `import {H3} from 'nimbletank-components'`
 * [H4](components/Heading) - `import {H4} from 'nimbletank-components'`
 * [H5](components/Heading) - `import {H5} from 'nimbletank-components'`
 * [H6](components/Heading) - `import {H6} from 'nimbletank-components'`
 * [Title](components/Heading) - `import {Title} from 'nimbletank-components'`
 * [Subtitle](components/Heading) - `import {Subtitle} from 'nimbletank-components'`


## Features
* [Jest](https://facebook.github.io/jest/) unit tests with [Enzyme](https://github.com/airbnb/enzyme)
* [Prettier](https://github.com/prettier/prettier) formatting
* [StandardJS](https://standardjs.com) Linting
* UI development environment provided by [Storybook](https://storybook.js.org/)

## Tasks
* `npm test` / `yarn test` to test everything
* `npm run test:watch` / `yarn test:watch` to watch files for changes and rerun tests related to changed files
* `npm run storybook:run` / `yarn storybook:run` to run storybook locally
* `npm run storybook:build` / `yarn storybook:build` to compile storybook for static deployment


[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/nimbletank/react-components)

### Versioning
For transparency into our release cycle and in striving to maintain backward compatibility, this repo is maintained under [the Semantic Versioning guidelines](http://semver.org/).

## Licence

[MIT](LICENCE)
