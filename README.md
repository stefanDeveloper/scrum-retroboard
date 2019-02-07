<div align="center">
<br>
<img src="https://user-images.githubusercontent.com/18898803/50174885-ad5b4f00-02fb-11e9-957c-f9e4afd01b6c.png" width="600px" />

</div>

<br>

<p align="center">
A Scalable Cross-Platform Desktop Apps based on  <a href="http://electron.atom.io/">Electron</a>, <a href="https://facebook.github.io/react/">React</a>, <a href="https://github.com/reactjs/redux">Redux</a>, <a href="https://github.com/reactjs/react-router">React Router</a>, <a href="http://webpack.github.io/docs/">Webpack</a> and <a href="https://github.com/gaearon/react-hot-loader">React Hot Loader</a> to enhance the Scrum Retrospective.
</p>

<div align="center">
<br>
<img src="https://forthebadge.com/images/badges/built-with-love.svg" />
<img src="https://forthebadge.com/images/badges/made-with-javascript.svg" />
<img src="https://forthebadge.com/images/badges/for-you.svg" />
</div>

<br>

<div align="center">

<a href="https://facebook.github.io/react/"><img src="./internals/img/react-padded-90.png" /></a>
<a href="https://webpack.github.io/"><img src="./internals/img/webpack-padded-90.png" /></a>
<a href="http://redux.js.org/"><img src="./internals/img/redux-padded-90.png" /></a>
<a href="https://github.com/ReactTraining/react-router"><img src="./internals/img/react-router-padded-90.png" /></a>
<a href="https://flowtype.org/"><img src="./internals/img/flow-padded-90.png" /></a>
<a href="http://eslint.org/"><img src="./internals/img/eslint-padded-90.png" /></a>
<a href="https://facebook.github.io/jest/"><img src="./internals/img/jest-padded-90.png" /></a>
<a href="https://yarnpkg.com/"><img src="./internals/img/yarn-padded-90.png" /></a>

</div>

<hr>
<br>

<div align="center">

[![Github Tag][github-tag-image]][github-tag-url]
[![Appveyor Build Status][appveyor-image]][appveyor-url]
[![Good first issues open][good-first-issue-image]][good-first-issue-url]

</div>

## Install

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/9ac3a109038141af913794d323a040b7)](https://app.codacy.com/app/stefanDeveloper/scrum-retroboard?utm_source=github.com&utm_medium=referral&utm_content=stefanDeveloper/scrum-retroboard&utm_campaign=Badge_Grade_Dashboard)

- **If you have installation or compilation issues with this project, please see [our debugging guide](https://github.com/stefanDeveloper/scrum-retroboard/issues/400)**

First, clone the repo via git:

```bash
git clone --depth 1 --single-branch --branch master https://github.com/stefanDeveloper/scrum-retroboard.git your-project-name
```

And then install the dependencies with yarn.

```bash
$ cd your-project-name
$ yarn
```

## Starting Development

Start the app in the `dev` environment. This starts the renderer process in [**hot-module-replacement**](https://webpack.js.org/guides/hmr-react/) mode and starts a webpack dev server that sends hot updates to the renderer process:

```bash
$ yarn dev
```

If you don't need autofocus when your files was changed, then run `dev` with env `START_MINIMIZED=true`:

```bash
$ START_MINIMIZED=true yarn dev
```

## Packaging for Production

To package apps for the local platform:

```bash
$ yarn package
```

## Docs

See our [complete docs here](https://github.com/stefanDeveloper/scrum-retroboard/wiki)

## Maintainers

- [Stefan Machmeier](https://github.com/stefanDeveloper)

## License

MIT © [Scrum Retroboard](https://github.com/stefanDeveloper/scrum-retroboard)

[github-tag-image]: https://img.shields.io/github/tag/stefanDeveloper/scrum-retroboard.svg?label=version
[github-tag-url]: https://github.com/stefanDeveloper/scrum-retroboard/releases/latest
[good-first-issue-image]: https://img.shields.io/github/issues/stefanDeveloper/scrum-retroboard/good%20first%20issue.svg?label=good%20first%20issues
[good-first-issue-url]: https://github.com/stefanDeveloper/scrum-retroboard/issues?q=is%3Aopen+is%3Aissue+label%3A"good+first+issue"
[appveyor-image]: https://ci.appveyor.com/api/projects/status/33f3ukwrwv3xr22a?svg=true
[appveyor-url]: https://ci.appveyor.com/project/stefanDeveloper/scrum-retroboard/branch/master
