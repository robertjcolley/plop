/* Copyright (c) 2021-present NextStep HealthTech */

function toInterfaceAttributeDefinition(text) {
  const array = text.split(' ')
  const newArray = []
  array.forEach(element => {
    const split = element.split(':');
    newArray.push(`  ${split[0]}: ${split[1]};`)
  });

  return newArray.join('\n');
}

module.exports = {toInterfaceAttributeDefinition}