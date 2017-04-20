/* eslint-disable no-var, comma-dangle */
var nodeVersionLessThan = require('node-version-check').lt;

var idObj;

if (nodeVersionLessThan(6)) {
  require('harmony-reflect'); // eslint-disable-line global-require
}

idObj = new Proxy({}, {
  get: function getter(target, key) {
    if (key === '__esModule') {
      return false;
    }
    return key;
  }
});

module.exports = idObj;
