/* Copyright (c) 2021-present NextStep HealthTech */

function toDynamodbAttributeDeclaration(text) {
  const array = text.split(' ')
  const newArray = []
  array.forEach(element => {
    newArray.push(`  @attribute()\n  ${element}: string;\n`);
  });

  return newArray.join('\n');
}

module.exports = {toDynamodbAttributeDeclaration}