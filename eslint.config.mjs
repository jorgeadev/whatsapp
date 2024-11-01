import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


/** @type {import("eslint").Linter.Config[]} */
export default [
	{ files: ["**/*.{js,mjs,cjs,ts}"] },
	{ languageOptions: { globals: { ...globals.browser, ...globals.node } } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	{
		languageOptions: { globals: { ...globals.browser, ...globals.node } },
		rules: {
			semi: ["warn", "always"],
			indent: ["error", "tab", { SwitchCase: 1 }],
			quotes: ["error", "double", { avoidEscape: true }],
			"no-unused-vars": "error",
			"prefer-const": "error",
			"object-curly-spacing": ["error", "always"],
		},
		ignores: ["node_modules/", "dist/", "build/", "public/"],
	}
];