/*
 * @Author       : fallen_zero
 * @Date         : 2023-10-10 10:29:08
 * @LastEditors  : fallen_zero
 * @LastEditTime : 2024-01-09 08:51:45
 * @FilePath     : /fallen-zero-ui/packages/eslint-config/index.js
 * @FileName     :
 */
module.exports = {
  parser: 'vue-eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended'],
  plugins: ['@typescript-eslint', 'prettier', 'vue'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
    defineModel: 'readonly',
    NodeJS: 'readonly',
  },
  rules: {
    'prettier/prettier': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    // 回车格式是 unix = lf 还是 window = crlf
    // 'linebreak-style': ['error', 'unix'],
    // 定义对象的set存取器属性时，强制定义get
    'accessor-pairs': 'error',
    // 使用单引号
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    // 强制已分号结束
    semi: ['error', 'always'],
    // 禁用var，用let和const代替
    'no-var': 'error',
    // 函数参数不能重复
    'no-dupe-args': 'error',
    // 在创建对象字面量时不允许键重复 {a:1,a:1}
    'no-dupe-keys': 'error',
    // 解决 index.html 报 clear 错误
    'vue/comment-directive': 'off',
    // 解决 'v-model' directives require no argument
    'vue/no-v-model-argument': 'off',
    // 解决 template 多标签时, 报错
    'vue/no-multiple-template-root': 'off',
    // 关闭 v-html 警告
    'vue/no-v-html': 'off',
    // 允许非空断言
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': ['off'], // 去掉类型为 any 时的警告
    // 不能有声明后未被使用的变量
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        caughtErrors: 'none',
      },
    ],
    // 强制箭头函数的箭头前后使用一致的空格
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    // 禁止或强制在单行代码块中使用空格
    'block-spacing': ['error', 'always'],
    // 强制在代码块中使用一致的大括号风格
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],
    // 强制使用骆驼拼写法命名约定
    camelcase: [
      'off',
      {
        properties: 'always',
      },
    ],
    //  数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号, always-multiline参数, 多行时末尾必须带逗号
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    // 控制逗号在行尾出现还是在行首出现 (默认行尾)
    'comma-style': ['error', 'last'],
    // 强制在子类构造函数中用super()调用父类构造函数，TypeScrip的编译器也会提示
    'constructor-super': 'error',
    // 强制所有控制语句使用一致的括号风格
    curly: ['error', 'multi-line'],
    // 强制object.key 中 . 的位置，参数:
    // property，'.'号应与属性在同一行
    // object, '.' 号应与对象名在同一行
    'dot-location': [2, 'property'],
    // 文件末尾强制换行
    'eol-last': 2,
    // 使用类型安全的 === 和 !== 操作符代替 == 和 != 除null以外
    eqeqeq: [2, 'always', { null: 'ignore' }],
    // 强制 generator 函数中 * 号周围使用一致的空格
    'generator-star-spacing': [
      2,
      {
        before: true,
        after: true,
      },
    ],
    // 要求回调函数中有容错处理
    'handle-callback-err': [2, '^(err|error)$'],
    // 强制在 JSX 属性中一致地使用双引号或单引号
    'jsx-quotes': ['error', 'prefer-single'],
    // 解决没有内容的标签必须使用单标签
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'any',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    // 设置每行最大属性数
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 10,
        },
        multiline: {
          max: 10,
        },
      },
    ],
    'vue/singleline-html-element-content-newline': 'off', // 在单行元素的内容之前和之后需要换行符
    'vue/multiline-html-element-content-newline': 'off', // 在多行元素的内容之前和之后需要换行符
    // vue组件使用多单词命名
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index'], //需要忽略的组件名
      },
    ],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],
    '@typescript-eslint/no-namespace': [
      'error',
      { allowDeclarations: true, allowDefinitionFiles: false },
    ],
    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': 'off',
  },
};
