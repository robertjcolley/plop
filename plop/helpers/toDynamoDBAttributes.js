/* Copyright (c) 2021-present NextStep HealthTech */

function toDynamoDBAttributes(text) {
  const array = text.split(' ')
  const newArray = []
  array.forEach((element, index) => {
    const split = element.split(':');
    if (index === 0) {
      newArray.push(`  @hashKey()`)
    } else {
      newArray.push(`  @attribute()`)
    }
    newArray.push(`  ${split[0]}: ${split[1]};`)
    newArray.push("")
  });

  return newArray.join('\n');
}

module.exports = {toDynamoDBAttributes}