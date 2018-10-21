# Fitbit SDK Types

Add types to your Fitbit project to use safely the SDK, work safely with TypeScript preventing you of doing stupid mistakes.

## How to use in your app project

1. Add this project as to your `devDependencies` with `npm install --save-dev fitbit-sdk-types`.
2. Add a reference in your target folder's `tsconfig.json` file:
   **app/tsconfig.json**

```json
{
	"extends": "../tsconfig.json",
	"compilerOptions": {
		"checkJs": true
	},
	"include": ["./", "../node_modules/fitbit-sdk-types/device"]
}
```

3. And use it:
   **app/index.js**

```typescript
import { Accelerometer } from 'accelerometer';

const acc = new Accelerometer();
console.log(acc.activated);
console.log(acc.potato); // error
```

## Examples

You can see a ton of official examples working as tests right here, under the `./test` path.

## Contributing

Make a PR submitting _at least_ the desired test examples to work under the `.test` path, ideally with some link to any of the Fitbit official sources to get more info.
