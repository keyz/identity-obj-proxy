# identity-obj-proxy [![Build Status](https://img.shields.io/travis/keyanzhang/identity-obj-proxy.svg?style=flat-square)](https://travis-ci.org/keyanzhang/identity-obj-proxy) [![npm version](https://img.shields.io/npm/v/identity-obj-proxy.svg?style=flat-square)](https://www.npmjs.com/package/identity-obj-proxy) [![test coverage](https://img.shields.io/coveralls/keyanzhang/identity-obj-proxy/master.svg?style=flat-square)](https://coveralls.io/github/keyanzhang/identity-obj-proxy?branch=master)
An identity object using ES6 proxies. Useful for mocking webpack imports. For instance, you can tell Jest to mock this object as imported [CSS modules](https://github.com/css-modules/css-modules); then all your `className` lookups on the imported `styles` object will be returned as-is.

```
npm install identity-obj-proxy
```

## ~~Real world example~~ Wait what does that even mean
### tl;dr
For a React component like
```js
import React, { Component } from 'react';

import styles from './App.css'; // CSS Modules here

export default class App extends Component {
  render() {
    return (
      <div className={styles.root}>
        <h1 className={styles.hello}>Hello, world!</h1>
      </div>
    );
  }
}
```

we can generate a snapshot as below (notice that the class names get correctly mocked):
```js
exports[`test App renders correctly 1`] = `
<div
  className="root">
  <h1
    className="hello">
    Hello, world!
  </h1>
</div>
`;
```

For more information, please take a look at https://github.com/keyanzhang/jest-css-modules-example/ and https://facebook.github.io/jest/docs/tutorial-webpack.html.

## Requirement
No flag is required for Node.js `v6.*`; use `node --harmony_proxies` flag for `v5.*` and `v4.*`.

## Example
``` javascript
import idObj from 'identity-obj-proxy';
console.log(idObj.foo); // 'foo'
console.log(idObj.bar); // 'bar'
console.log(idObj[1]); // '1'
```
