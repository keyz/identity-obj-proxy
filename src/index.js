const Reflect = require('harmony-reflect'); // eslint-disable-line no-unused-vars

const idObjHandler = {
  get: (target, key) => key,
};

const idObj = new Proxy({}, idObjHandler);

export default idObj;
