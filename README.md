# Fitbit SDK Types ✔

[![npm version](https://badge.fury.io/js/fitbit-sdk-types.svg)](https://www.npmjs.com/package/fitbit-sdk-types)
[![CI Status](https://github.com/SergioMorchon/fitbit-sdk-types/workflows/CI/badge.svg)](https://github.com/SergioMorchon/fitbit-sdk-types/actions?query=workflow%3ACI)

Add types to your Fitbit CLI project and work safely with TypeScript preventing you of doing stupid mistakes.

## ⚙ How to use in your app project

1. First, create your Fitbit CLI project following the official instructions at https://dev.fitbit.com/build/guides/command-line-interface/.
2. Then, from that project root, you can run:
   - `npx fitbit-sdk-types apply-js` to enhance your existing Fitbit project with autocomplete and soft checks.
   - Or `npx fitbit-sdk-types apply-ts` to convert your project to TypeScript and have all the features.

You can also do it manually wit the following basic configuration files:

- `app/tsconfig.json`

```json
{
	"extends": "../tsconfig.json",
	"include": ["**/*.ts", "../node_modules/fitbit-sdk-types/types/device"]
}
```

- `companion/tsconfig.json`

```json
{
	"extends": "../tsconfig.json",
	"include": ["**/*.ts", "../node_modules/fitbit-sdk-types/types/companion"]
}
```

- `settings/tsconfig.json`

```json
{
	"extends": "../tsconfig.json",
	"include": [
		"**/*.ts",
		"**/*.tsx",
		"../node_modules/fitbit-sdk-types/types/settings"
	]
}
```

- `tsconfig.json`:

```json
{
	"extends": "./node_modules/@fitbit/sdk/sdk-tsconfig.json"
}
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

You can see a ton of official examples working as tests right here, under the `./test-code-samples` path.

## Gotchas

### Be strict...

- 🧐 **To have a _full type experience_**: add the `strict` mode to your **tsconfig.json**:

```json
{
	"compilerOptions": {
		"strict": true
	}
}
```

### ... Or not

You can always place `// @ts-ignore` right above that line of code that you know that _should_ work, and probably needs to have it's typings fixed.

## SDK Support

Only the latest SDK version is supported. Also don't expect this project version to match the official SDK version.

## Contributing

### ❗ Open an issue

If you have a question, suggestion or bug report, don't be shy and open an issue 🎈.

### 💪 Make a PR

1. The use cases you think that must be covered, under a meaningful section inside **test-code-samples/**.
1. The type definition in the appropiate **types/** file.
1. If possible, a link to the official documentation or community forum thread.
