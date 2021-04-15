/* Copyright (c) 2021-present NextStep HealthTech */

function toClassAttributeInstantiation(text) {
  const array = text.split(' ')
  const newArray = []
  array.forEach(element => {
    newArray.push("    this." + element + " {{{equals}}} data." + element + ";");
  });

  return newArray.join('\n');
}

module.exports = {toClassAttributeInstantiation}