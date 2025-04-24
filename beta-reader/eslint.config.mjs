// eslint.config.mjs
import importPlugin from "eslint-plugin-import";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import prettierPlugin from "eslint-plugin-prettier";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import unusedImportsPlugin from "eslint-plugin-unused-imports";
import { dirname } from "path";
import { fileURLToPath } from "url";

import babelParser from "@babel/eslint-parser";
import { FlatCompat } from "@eslint/eslintrc";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname });

// eslint 설정 배열 생성
const eslintConfig = [
  // 기본 설정
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "dist/**",
      "storybook-static/**",
      ".storybook/**",
      "__mock__/**"
    ]
  },
  // 스토리북 파일에 대한 특별 설정
  {
    files: ["**/*.stories.tsx", "**/*.stories.ts"],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-react", "@babel/preset-typescript"]
        }
      },
      globals: {
        React: "readonly",
        JSX: "readonly"
      }
    },
    plugins: {
      react: reactPlugin,
      "@typescript-eslint": typescriptEslint,
      "react-hooks": reactHooksPlugin, // 리액트 훅 플러그인 추가
      "unused-imports": unusedImportsPlugin, // 미사용 import 플러그인 추가
      prettier: prettierPlugin // Prettier 플러그인 추가
    },
    rules: {
      // 스토리북용 룰 완화
      "@typescript-eslint/no-unused-vars": "off",
      "import/no-unused-modules": "off",
      "import/no-anonymous-default-export": "off",
      "unused-imports/no-unused-imports": "off",
      "react-hooks/rules-of-hooks": "off", // 스토리북에서는 hooks 규칙 비활성화
      "react-hooks/exhaustive-deps": "off" // hooks 의존성 규칙도 비활성화
    }
  },
  // JavaScript 파일에 적용
  {
    files: ["**/*.js", "**/*.jsx", "**/*.mjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true }
      }
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "jsx-a11y": jsxA11yPlugin,
      import: importPlugin,
      prettier: prettierPlugin,
      "unused-imports": unusedImportsPlugin // 누락된 플러그인 추가
    },
    rules: {
      "import/no-anonymous-default-export": "off",
      "unused-imports/no-unused-imports": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "prettier/prettier": ["error", { endOfLine: "auto" }]
    }
  },
  // 모든 TypeScript 파일에 적용
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
        project: "./tsconfig.json"
      },
      globals: {
        React: "readonly",
        JSX: "readonly"
      }
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "jsx-a11y": jsxA11yPlugin,
      import: importPlugin,
      "@typescript-eslint": typescriptEslint,
      "unused-imports": unusedImportsPlugin
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_"
        }
      ],
      "unused-imports/no-unused-imports": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn"
    }
  },
  // Prettier 설정
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    plugins: {
      prettier: prettierPlugin
    },
    rules: {
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto"
        }
      ]
    }
  },
  // Next.js 관련 설정
  ...compat.config({
    extends: ["next/core-web-vitals"]
  }),
  // TypeScript 관련 설정
  ...compat.config({
    extends: ["plugin:@typescript-eslint/recommended"]
  })
];

export default eslintConfig;
