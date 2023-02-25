module.exports = {
  extends: [require.resolve('arui-presets-lint/eslint'), 'plugin:react/jsx-runtime'],
  parserOptions: {
    project: ['./tsconfig.eslint.json' /* './cypress/tsconfig.json' */],
  },

  overrides: [
    {
      files: ['config/**/*.ts', 'src/global-definitions.d.ts', 'src/libs.d.ts'],
      rules: {
        'import/no-default-export': 'warn',
      },
    },
  ],
  rules: {
    'jsx-a11y/control-has-associated-label': ['off'],
    'simple-import-sort/imports': 'off',
    // 'import/no-extraneous-dependencies': [
    //   'error',
    //   // {
    //   //   // TODO: добавить после cypess 'cypress/**/*.ts',
    //   //   devDependencies: ['**/*.test.{ts,tsx,js,jsx}'],
    //   // },
    //   {
    //     devDependencies: false,
    //     optionalDependencies: false,
    //     peerDependencies: false,
    //     packageDir: './',
    //   },
    // ],
    'import/no-default-export': 'warn',
    indent: 'off', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^action' }],
    'no-nested-ternary': 'off',
    'no-unneeded-ternary': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state'],
      },
    ],
  },
  ignorePatterns: ['coverage', 'cypress.config.ts'],
};
