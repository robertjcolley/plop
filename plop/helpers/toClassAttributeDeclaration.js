/* Copyright (c) 2021-present NextStep HealthTech */

function toClassAttributeDeclaration(text) {
  const array = text.split(' ')
  const newArray = []
  array.forEach(element => {
    newArray.push(`  ${element}: string;`)
  });

  return newArray.join('\n');
}

module.exports = {toClassAttributeDeclaration}