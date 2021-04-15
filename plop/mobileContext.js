/* Copyright (c) 2021-present NextStep HealthTech */

const mobileContextGenerator = {
  description: 'Create a context for the mobile app',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is your context name? (the word "Context" is automatically appended to the name)',
    },
  ],
  actions: [
    {
      type: 'add',
      path: 'mobile/src/contexts/{{pascalCase name}}Context.tsx',
      templateFile: 'plop-templates/Context/index.tsx.hbs',
    },
  ],
}

module.exports = {mobileContextGenerator};