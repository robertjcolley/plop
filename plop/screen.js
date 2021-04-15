/* Copyright (c) 2021-present NextStep HealthTech */

const screenGenerator = {
  description: 'Create a mobile application screen',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your screen?',
    },
  ],
  actions: [
    {
      type: 'add',
      path: 'mobile/src/screens/{{pascalCase name}}/index.tsx',
      templateFile: 'plop-templates/Screen/index.tsx.hbs',
    },
    {
      type: 'add',
      path: 'mobile/src/screens/{{pascalCase name}}/styles.ts',
      templateFile: 'plop-templates/Screen/styles.ts.hbs',
    },
  ],
}

module.exports = {screenGenerator};