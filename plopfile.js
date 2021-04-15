const { toClassAttributeInstantiation } = require('./plop/helpers/toClassAttributeInstantiation');
const { toClassAttributeDeclaration } = require('./plop/helpers/toClassAttributeDeclaration');
const { toDatabaseModelInterfaceList } = require('./plop/helpers/toDatabaseModelInterfaceList');
const { toDynamodbAttributeDeclaration } = require('./plop/helpers/toDynamodbAttributeDeclaration');
const { toInterfaceAttributeDefinition } = require('./plop/helpers/toInterfaceAttributeDefinition');
const { toDynamoDBAttributes } = require('./plop/helpers/toDynamoDBAttributes')

const { webComponentGenerator } = require('./plop/webComponent');
const { webPageGenerator } = require('./plop/webPage')
const { mobileComponentGenerator } = require('./plop/mobileComponent');
const { fullStackGenerator } = require('./plop/fullStackObject');
const { mobileContextGenerator } = require('./plop/mobileContext');
const { serverApiRoute } = require('./plop/serverApiRoute');
const { screenGenerator } = require('./plop/screen');

module.exports = plop => {
  // Plop helpers
  plop.setHelper('toCsv', function (text) {
    return text.split(' ').map(item => item.split(':')[0]).join();
  });

  plop.setHelper('equals', function (text) {
    return '='
  });

  plop.setHelper('lowercase', function (text) {
    return text.split(' ').join('-').toLowerCase()
  });
  
  plop.setHelper('toInterfaceAttributeDefinition', toInterfaceAttributeDefinition);
  plop.setHelper('toDatabaseModelInterfaceList', toDatabaseModelInterfaceList);
  plop.setHelper('toClassAttributeDeclaration', toClassAttributeDeclaration);
  plop.setHelper('toClassAttributeInstantiation', toClassAttributeInstantiation);
  plop.setHelper('toDynamodbAttributeDeclaration', toDynamodbAttributeDeclaration);
  plop.setHelper('toDynamoDBAttributes', toDynamoDBAttributes);
  
  // Plop generators
  plop.setGenerator('full-stack data object', fullStackGenerator);
  plop.setGenerator('web component', webComponentGenerator);
  plop.setGenerator('web page', webPageGenerator);
  plop.setGenerator('mobile component', mobileComponentGenerator );
  plop.setGenerator('mobile screen', screenGenerator);
  plop.setGenerator('mobile context', mobileContextGenerator);
  plop.setGenerator('server api route', serverApiRoute);
};
