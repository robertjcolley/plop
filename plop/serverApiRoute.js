/* Copyright (c) 2021-present NextStep HealthTech */

const serverApiRoute = {
  description: 'Create an API route for the server',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is your route name?',
    },
  ],
  actions: [
          // Server additions
    // add the module files
    {
      type: 'add',
      path: 'server/src/modules/{{lowerCase name}}/{{lowerCase name}}.controller.ts',
      templateFile: 'plop-templates/FullStackData/server/new.controller.ts.hbs',
    },
    {
      type: 'add',
      path: 'server/src/modules/{{lowerCase name}}/{{lowerCase name}}.module.ts',
      templateFile: 'plop-templates/FullStackData/server/new.module.ts.hbs',
    },
    {
      type: 'add',
      path: 'server/src/modules/{{lowerCase name}}/{{lowerCase name}}.service.ts',
      templateFile: 'plop-templates/FullStackData/server/new.service.ts.hbs',
    },
    // add table declaration and definition to dynamodb
    {
      type: 'append',
      path: 'server/src/singletons/dynamodb.ts',
      pattern: '/* PLOP APPEND 1 START */',
      template: '    {{constantCase name}}S: string;'
    },
    {
      type: 'append',
      path: 'server/src/singletons/dynamodb.ts',
      pattern: '/* PLOP APPEND 2 START */',
      template: '      {{constantCase name}}S: `goodlife-${process.env.GOODLIFE_ENV}-{{lowerCase name}}s`,'
    },
    // add imports to app.module.ts
    {
      type: 'append',
      path: 'server/src/app.module.ts',
      pattern: '/* PLOP APPEND 1 START */',
      template: 'import { {{pascalCase name}}Module } from \'./modules/{{lowerCase name}}/{{lowerCase name}}.module\';'
    },
    {
      type: 'append',
      path: 'server/src/app.module.ts',
      pattern: '/* PLOP APPEND 2 START */',
      template: '    {{pascalCase name}}Module,'
    },
  ],
}

module.exports = {serverApiRoute};