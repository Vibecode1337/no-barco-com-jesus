import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';

const source = await readFile(
  new URL('../components/page-motion.tsx', import.meta.url),
  'utf8',
);
const code = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES2022,
  },
}).outputText;

function setup({ reduced = false, supported = true } = {}) {
  let cleanup;
  let onChange;
  let callback;
  let observed = 0;
  let played = 0;
  let cancelled = 0;
  let disconnected = 0;
  const preference = {
    matches: reduced,
    addEventListener: (_, fn) => {
      onChange = fn;
    },
    removeEventListener: () => {
      onChange = undefined;
    },
  };
  const target = {
    parentElement: { closest: () => null },
    animate: () => {
      played++;
      return {
        cancel: () => {
          cancelled++;
        },
      };
    },
  };
  class Observer {
    constructor(fn) {
      callback = fn;
    }
    observe() {
      observed++;
    }
    unobserve() {}
    disconnect() {
      disconnected++;
    }
  }
  const window = { matchMedia: () => preference };
  if (supported) window.IntersectionObserver = Observer;
  const exports = {};
  runInNewContext(code, {
    exports,
    window,
    IntersectionObserver: Observer,
    document: { querySelectorAll: () => [target] },
    require: () => ({
      useEffect: (fn) => {
        cleanup = fn();
      },
    }),
  });
  exports.PageMotion();
  return {
    stats: () => ({ observed, played, cancelled, disconnected }),
    enter: () => callback([{ target, isIntersecting: true }]),
    leave: () => callback([{ target, isIntersecting: false }]),
    reduce: () => {
      preference.matches = true;
      onChange();
    },
    cleanup: () => cleanup?.(),
  };
}

const normal = setup();
assert.equal(normal.stats().observed, 1);
normal.leave();
assert.equal(normal.stats().played, 0);
normal.enter();
normal.enter();
assert.equal(normal.stats().played, 1, 'Animate once per element');
normal.reduce();
assert.equal(
  normal.stats().cancelled,
  1,
  'Stop immediately when reduced motion is enabled',
);
normal.cleanup();
assert.ok(normal.stats().disconnected >= 1);
const reduced = setup({ reduced: true });
assert.equal(reduced.stats().observed, 0);
assert.equal(reduced.stats().played, 0);
reduced.cleanup();
const unsupported = setup({ supported: false });
assert.equal(unsupported.stats().observed, 0);
unsupported.cleanup();
console.log(
  'Motion checks passed: once-only entrance, reduced motion, cleanup, unsupported browser fallback.',
);
