# identity-obj-proxy [![Build Status](https://img.shields.io/travis/keyanzhang/identity-obj-proxy.svg?style=flat)](https://travis-ci.org/keyanzhang/identity-obj-proxy) [![npm version](https://img.shields.io/npm/v/identity-obj-proxy.svg?style=flat)](https://www.npmjs.com/package/identity-obj-proxy)
An identity object using ES6 proxies. Useful for testing trivial webpack imports. For instance, you can tell Jest to mock this object as imported [CSS modules](https://github.com/css-modules/css-modules); then all your `className` lookup on the imported `styles` object will be returned as-is.

## Requirement
`node --harmony_proxies` flag (>= v0.7.8)

## Example
``` javascript
import idObj from 'identity-obj-proxy';
console.log(idObj.foo); // 'foo'
console.log(idObj.bar); // 'bar'
console.log(idObj[1]); // '1'
```
