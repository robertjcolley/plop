/* Copyright (c) 2021-present NextStep HealthTech */

const webPageGenerator = {
  description: 'Create a web page',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your page?',
    },
  ],
  actions: [
    {
      type: 'add',
      // Plop will create directories for us if they do not exist
      // so it's okay to add files in nested locations.
      path: 'web/src/pages/{{lowercase name}}/index.tsx',
      templateFile: 'plop-templates/Page/index.tsx.hbs',
    },
    {
      type: 'add',
      path: 'web/src/page-styles/{{lowercase name}}/styles.ts',
      templateFile: 'plop-templates/Page/styles.ts.hbs',
    },
  ],
}

module.exports = {webPageGenerator};