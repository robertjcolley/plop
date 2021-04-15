/* Copyright (c) 2021-present NextStep HealthTech */

const mobileComponentGenerator = {
  description: 'Create a reusable component for the mobile app',
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
      path: 'mobile/src/components/{{pascalCase name}}/index.tsx',
      templateFile: 'plop-templates/Component/index.tsx.hbs',
    },
    {
      type: 'add',
      path: 'mobile/src/components/{{pascalCase name}}/styles.ts',
      templateFile: 'plop-templates/Component/styles.ts.hbs',
    },
  ],
}

module.exports = {mobileComponentGenerator};