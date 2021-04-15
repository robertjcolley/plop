/* Copyright (c) 2021-present NextStep HealthTech */

function toDatabaseModelInterfaceList(text) {
  const array = text.split(' ')
  const newArray = []
  array.forEach(element => {
    newArray.push(`  ${element}: string`)
  });

  return newArray.join('\n');
}

module.exports = { toDatabaseModelInterfaceList }