# Frequently asked questions

## `Property 'style' does not exist on type 'Element'. ts(2339)`

`document.getElementById` returns a plain `Element`. If you _know_ that it is an element of any specific kind, you can specify that by adding a type cast `as SomeElement`.
There are a lot of different element types. Take a look at the [device document elements](types/device/document/elements.d.ts).

For example:

```typescript
const demo = document.getElementById('demo') as GraphicsElement;
demo.style.fill = 'red';
```

## Ignore typescript errors

You an skip checking files in different ways:

- [`// @ts-nocheck`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#-ts-nocheck-in-typescript-files).
- [`// @ts-ignore`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-6.html#suppress-errors-in-ts-files-using--ts-ignore-comments).
- `checkJs: false` in the appropriate `tsconfig.json` file.

## K-pay

If you have K-pay files copied within your own source code, you may see that it contains TypeScript errors. You can easily _skip_ those checks by using one of the [Ignore typescript errors](#Ignore-typescript-errors) techniques. The most interesting one in this case may be to `checkJs: false` to avoid checking K-pay `.js` files, while effectively checking your own `.ts` files.
