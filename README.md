# Fitbit SDK Types

[![npm version](https://badge.fury.io/js/fitbit-sdk-types.svg)](https://badge.fury.io/js/fitbit-sdk-types)
[![Build Status](https://travis-ci.org/SergioMorchon/scroll-based-carousel.svg?branch=master)](https://travis-ci.org/SergioMorchon/scroll-based-carousel)

Add types to your Fitbit project to use safely the SDK, work safely with TypeScript preventing you of doing stupid mistakes.

## How to use in your app project

1. Execute `npm install --save-dev fitbit-sdk-types` to add this type definitions.
2. `include` them in your project's `tsconfig.json` file. It sould look like this **tsconfig.json**:

```json
{
	"extends": "./node_modules/@fitbit/sdk/sdk-tsconfig.json",
	"include": ["node_modules/fitbit-sdk-types/src", "./**/*.ts", "./**/*.tsx"]
}
```

3. Rename your files from `.js` to `.ts` and use it. For example, **app/index.ts**:

```typescript
import { Accelerometer } from 'accelerometer';

const acc = new Accelerometer();
console.log(acc.activated);
console.log(acc.potato); // error
```

## Examples

You can see a ton of official examples working as tests right here, under the `./test` path.

## Gotchas

- **Avoid using `any` in callbacks of defined functions**:
  TypeScript will give it the correct type, but only if you let it be. If you cast them as any other type, you could be hiding errors (either in your code or in this type definition, or even in the official documentation).

- **Be careful about what you import**:
  Currently, there is only **one** Fitbit build process for **up to 3** different targets -to know: `app`, `companion` and `settings`-.
  So because of this, I didn't found a way of having one single `tsconfig.json` called from the _fitbit-cli_ and different typings per target. So you will have to declare them all together, knowing that -for example- although there is an ambien module for `accelerometer`, it won't exist inside the `companion` target.

## Contributing

Make a PR submitting _at least_ the desired test examples to work under the `.test` path, ideally with some link to any of the Fitbit official sources to get more info.
