import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from 'eslint-plugin-vue';
import prettier from 'eslint-plugin-prettier'



export default [
  {files: ["**/*.{js,mjs,cjs,ts,vue}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    files: ["**/*.vue"], 
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser
      }}
  },
  {
		plugins: {
			prettier: prettier,
		},
		rules: {
			// 开启这条规则后，会将prettier的校验规则传递给eslint，这样eslint就可以按照prettier的方式来进行代码格式的校验
			'prettier/prettier': 'error',
			'no-var': 'error', // 要求使用 let 或 const 而不是 var
			'no-console': 'off',  // 关闭console
			'no-restricted-globals': 'off',  // 关闭禁止使用特定的全局变量
			'no-restricted-syntax': 'off',  // 关闭禁止使用特定的语法
			'vue/multi-word-component-names': 'off',
			'no-multiple-empty-lines': ['warn', { max: 1 }], // 空行最多不能超过1行
			'vue/valid-template-root': 'off',  // 关闭模板根节点校验
		},
	},
];