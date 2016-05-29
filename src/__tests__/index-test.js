/* eslint-disable space-before-function-paren, func-names */
var idObj = require('..');

describe('idObj', function() {
  it('should return the key as a string', function() {
    expect(idObj.foo).toBe('foo');
  });
  it('should support dot notation', function() {
    expect(idObj.bar).toBe('bar');
  });
  it('should support bracket notation', function() {
    expect(idObj[1]).toBe('1');
  });
});
