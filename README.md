# Fitbit SDK Types

Add types to your Fitbit project to use safely the SDK.

_This is a work in progress project to add static typing for the FITBIT SDK modules._

## How to use in your app project

1. Add this project as to your `devDependencies`with `npm install --save-dev fitbit-sdk-types`.
1. Add a _reference type_ to any of your files, or to a `global.d.ts` one with `/// <reference types="fitbit-sdk-types" />`.
1. Profit!

**app/index.ts**
```typescript
/// <reference types="fitbit-sdk-types" />

import { Accelerometer } from "accelerometer";

const acc = new Accelerometer();
console.log(acc.activated);
console.log(acc.potato); // error
```

## Examples

You can see a ton of official examples working as tests right here, under the `./test` path.

## Contributing

Make a PR submitting _at least_ the desired test examples to work under the `.test` path, ideally with some link to any of the Fitbit official sources to get more info.

## Remainig

* All the *Companion* APIs.
* Some *App*'s `document` module types (mostly `WhateverElement`).