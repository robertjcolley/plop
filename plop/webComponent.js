/* Copyright (c) 2021-present NextStep HealthTech */

const webComponentGenerator = {
  description: 'Create a reusable component for the web app',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is your component name?',
    },
  ],
  actions: [
    {
      type: 'add',
      path: 'web/src/components/{{pascalCase name}}/index.tsx',
      templateFile: 'plop-templates/WebComponent/index.tsx.hbs',
    },
    {
      type: 'add',
      path: 'web/src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
      templateFile: 'plop-templates/WebComponent/index.test.tsx.hbs',
    },
    {
      type: 'add',
      path: 'web/src/components/{{pascalCase name}}/styles.ts',
      templateFile: 'plop-templates/WebComponent/styles.ts.hbs',
    },
  ],
}

module.exports = {webComponentGenerator};