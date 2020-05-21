module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  if (item.enhancement === 20) {
    return {...item};
  } else {
    return {...item, enhancement: item.enhancement + 1};
  }
}

function fail(item) {
  // if (item.enhancement < 15) {
  //   return {...item, durabilty: item.durability - 5};
  // } else {
  //   return {...item, durabilty: item.durabilty - 10};
  // }

  const num = item.enhancement < 15 ? item.durability - 5 : item.durability - 10;

  const level = item.enchancement > 16 ? item.enchancement - 1 : item.enchancement;

  return {...item, durability: num};
}

function repair(item) {
  return {...item, durability: 100};
}

function get(item) {
  return {...item};
}
