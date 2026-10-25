import fs from 'fs';
import path from 'path';

const source = fs.readFileSync(path.join(__dirname, '..', 'index.js'), 'utf8');

function loadWithProcess(fakeProcess) {
  const mod = { exports: {} };
  // eslint-disable-next-line no-new-func
  new Function('module', 'require', 'process', source)(mod, require, fakeProcess);
  return mod.exports;
}

describe('idObj with a browser process shim', () => {
  it('should load when process.versions has no node field', () => {
    const idObj = loadWithProcess({ env: {}, versions: {} });
    expect(idObj.foo).toBe('foo');
  });
  it('should load when process has no versions field', () => {
    const idObj = loadWithProcess({ env: {} });
    expect(idObj.foo).toBe('foo');
  });
});
