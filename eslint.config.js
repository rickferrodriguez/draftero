// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");
const prettierRecommended = require("eslint-plugin-prettier/recommended");
const prettierPlugin = require("eslint-plugin-prettier");
const tsPlugin = require("@typescript-eslint/eslint-plugin");
const angularPlugin = require("@angular-eslint/eslint-plugin");

module.exports = tseslint.config(
    {
        files: ["**/*.ts"],
        extends: [
            eslint.configs.recommended,
            ...tseslint.configs.recommended,
            ...tseslint.configs.stylistic,
            ...angular.configs.tsRecommended,
            prettierRecommended,
        ],
        processor: angular.processInlineTemplates,
        rules: {
            ...tsPlugin.configs.recommended.rules,
            ...angularPlugin.configs.recommended.rules,
            ...prettierPlugin.configs?.rules,
            "@angular-eslint/component-class-suffix": [
                "error",
                {
                    suffixes: ["Page", "Component"],
                },
            ],
            "@angular-eslint/directive-selector": [
                "warn",
                {
                    type: "attribute",
                    prefix: "app",
                    style: "camelCase",
                },
            ],
            "@angular-eslint/component-selector": [
                "error",
                {
                    type: "element",
                    prefix: "app",
                    style: "kebab-case",
                },
            ],
            "@typescript-eslint/member-ordering": 0,
            "@typescript-eslint/naming-convention": 0,
        },
    },
    {
        files: ["**/*.html"],
        extends: [
            ...angular.configs.templateRecommended,
            ...angular.configs.templateAccessibility,
            prettierRecommended,
        ],
        rules: {
            "prettier/prettier": ["error", { parser: "angular" }],
        },
    }
);
