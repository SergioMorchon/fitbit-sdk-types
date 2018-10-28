# Fitbit SDK Types ✔

[![npm version](https://badge.fury.io/js/fitbit-sdk-types.svg)](https://badge.fury.io/js/fitbit-sdk-types)
[![Build Status](https://travis-ci.org/SergioMorchon/scroll-based-carousel.svg?branch=master)](https://travis-ci.org/SergioMorchon/scroll-based-carousel)

Add types to your Fitbit CLI project and work safely with TypeScript preventing you of doing stupid mistakes.

## ⚙ How to use in your app project

1. Execute `npm install --save-dev fitbit-sdk-types` to add this type definitions.
2. `include` them in your project's `tsconfig.json` file. It may look like this **tsconfig.json**:

```json
{
	"extends": "./node_modules/@fitbit/sdk/sdk-tsconfig.json",
	"include": ["node_modules/fitbit-sdk-types/src", "**/*.ts", "**/*.tsx"]
}
```

3. Rename your files from `.js` to `.ts` and use it. For example, **app/index.ts**:

```typescript
import { Accelerometer } from 'accelerometer';

const acc = new Accelerometer();
console.log(acc.activated);
console.log(acc.potato); // error
```

## Benefits of using types

### Discoverability

Know what is available to build your ideas right from your code.

**Enumerated and strict string literals**

![Autocomplete permissions](./doc/img/autocomplete-permissions.png)

**Also in JSX for settings**

![Autocomplete in JSX](./doc/img/autocomplete-tsx.png)

### Integrated with the Fitbit CLI build process

It is fully integrated within the Fitbit CLI build process that _already_ uses TypeScript. With this approach you are just _extending_ its knowledge about what can you use and how.

So if your code is not ok, then it won't build. That way it will prevent you from wasting a lot of time with typos, undefined functions and trivial bugs, letting you focus on what really matters.

**Code error, so the build process fails**
![Build integration](./doc/img/build-integration.png)

## Examples

You can see a ton of official examples working as tests right here, under the `./test` path.

## Gotchas

- 🧐 **To have a _full type experience_**: add the `strict` mode to your **tsconfig.json**:

```json
{
	"extends": "./node_modules/@fitbit/sdk/sdk-tsconfig.json",
	"compilerOptions": {
		"strict": true
	},
	"include": ["node_modules/fitbit-sdk-types/src", "**/*.ts", "**/*.tsx"]
}
```

- **Avoid using `any` in callbacks of defined functions**:
  TypeScript will give it the correct type, but only if you let it be. If you cast them as any other type, you could be hiding errors (either in your code or in this type definition, or even in the official documentation).

- **Be careful about what you import**:
  Currently, there is only **one** Fitbit build process for **up to 3** different targets -to know: `app`, `companion` and `settings`-.
  So because of this, I didn't found a way of having one single `tsconfig.json` called from the _fitbit-cli_ and different typings per target. So you will have to declare them all together, knowing that -for example- although there is an ambien module for `accelerometer`, it won't exist inside the `companion` target.

## Contributing

### ❗ Open an issue

If you have a question, suggestion or bug report, don't be shy and open an issue 🎈.

### 💪 Make a PR with:

1. The use cases you think that must be covered, under a meaningful section inside **tests/**.
1. The type definition in the appropiate **src/** file.
1. If possible, a link to the official documentation or community forum thread.
