import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';

const source = await readFile(
  new URL('../components/ui/dialog.tsx', import.meta.url),
  'utf8',
);
const output = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.CommonJS,
    jsx: ts.JsxEmit.React,
    target: ts.ScriptTarget.ES2022,
  },
}).outputText;
const exports = {};
runInNewContext(output, {
  exports,
  require: (name) => {
    if (name === 'react')
      return {
        createElement: (type, props, ...children) => ({
          type,
          props,
          children,
        }),
      };
    if (name === '@base-ui/react/dialog') return { Dialog: { Popup: 'popup' } };
    if (name === '@/lib/utils')
      return { cn: (...values) => values.filter(Boolean).join(' ') };
    return {};
  },
});
function popup(fullScreen) {
  return exports
    .DialogContent({ fullScreen })
    .children.find((child) => child?.type === 'popup');
}
const fullscreen = popup(true).props.className;
assert.match(fullscreen, /fixed inset-0/);
assert.match(fullscreen, /h-dvh w-full max-w-none/);
assert.doesNotMatch(
  fullscreen,
  /translate|top-1\/2|left-1\/2|zoom|sm:max-w-sm/,
);
assert.match(popup(false).props.className, /top-1\/2 left-1\/2/);
assert.match(popup(undefined).props.className, /-translate-x-1\/2/);
const header = await readFile(
  new URL('../components/site-header.tsx', import.meta.url),
  'utf8',
);
assert.match(header, /<DialogContent\s+fullScreen/);
console.log(
  'Dialog layout checks passed: fullscreen has no centering offsets; default dialogs preserved.',
);
