/* Copyright (c) 2021-present NextStep HealthTech */

const fullStackGenerator = {
  description: 'Create a new full stack data object',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the new data object? (Please use a singular noun)',
      validate: function(value) { 
        if ((/.+/).test(value)) { return true; }
        return 'Your new data object must have a name.'
      }
    },
    {
      type: 'input',
      name: 'attributes',
      message: 'What attributes does your new data object have (use the form: "attr:type")?',
      validate: function(value) { 
        if ((/.+/).test(value)) { return true; }
        return 'Your new data object must have attributes.'
      }
    },
  ],
  actions: [
    // Database additions
    {
      type: 'addMany',
      destination: 'database/scripts/{{lowerCase name}}',
      base: 'plop-templates/FullStackData/database/',
      templateFiles: 'plop-templates/FullStackData/database/*',
    },
    {
      type: 'append',
      path: 'database/scripts/create-tables.js',
      pattern: '/* PLOP APPEND 1 START */',
      template: 'const {{lowerCase name}}s = require(\'./{{lowerCase name}}\');'
    },
    {
      type: 'append',
      path: 'database/scripts/create-tables.js',
      pattern: '/* PLOP APPEND 2 START */',
      template: '{{lowerCase name}}s.create{{pascalCase name}}sTable(dynamodb, docClient, createTableCallback, putCallback);'
    },
    {
      type: 'modify',
      path: 'database/scripts/{{lowerCase name}}/data.csv',
      pattern: 'uid,',
      template: 'uid,{{toCsv attributes}}'
    },

    // Server additions
    {
      type: 'add',
      path: 'server/src/modules/{{lowerCase name}}/__test__/{{lowerCase name}}.spec.ts',
      templateFile: 'plop-templates/FullStackData/server/new.spec.ts.hbs',
    },
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
    {
      type: 'add',
      path: 'server/src/modules/{{lowerCase name}}/{{lowerCase name}}.dynamodb.ts',
      templateFile: 'plop-templates/FullStackData/server/new.dynamo.ts.hbs',
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
      template: '      {{constantCase name}}S: `nextstep-health-${process.env.NEXTSTEP_ENV}-{{lowerCase name}}s`,'
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
    // Append to server module routes
    {
      type: 'append',
      path: 'globals/src/api/routes.ts',
      pattern: '/* PLOP APPEND 0 START */',
      template: '  {{constantCase name}} = "{{lowerCase name}}s",'
    },
    // API file
    {
      type: 'add',
      path: 'globals/src/api/modules/{{lowerCase name}}.ts',
      templateFile: 'plop-templates/FullStackData/globals/api/index.ts.hbs',
    },
    // API endpoint setup append to globals/api/index.ts
    {
      type: 'append',
      path: 'globals/src/api/index.ts',
      pattern: '/* PLOP APPEND 0 START */',
      template: 'import { {{pascalCase name}}API } from \'./modules/{{lowerCase name}}\';'
    },
    {
      type: 'append',
      path: 'globals/src/api/index.ts',
      pattern: '/* PLOP APPEND 1 START */',
      template: '  {{camelCase name}}: {{pascalCase name}}API,'
    },
    {
      type: 'append',
      path: 'globals/src/api/index.ts',
      pattern: '/* PLOP APPEND 2 START */',
      template: '      {{camelCase name}}: new {{pascalCase name}}API({...payload, modulePath: ServerModuleRoutes.{{constantCase name}} }),'
    },
    // Model Interface File
    {
      type: 'add',
      path: 'globals/src/model/{{lowerCase name}}/index.ts',
      templateFile: 'plop-templates/FullStackData/globals/model/index.ts.hbs',
      transform: function(text) {
        return text.replace(/{{{equals}}}/g, "=");
      }
    },
  ],
}

module.exports = {fullStackGenerator};