module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  const e = item.enhancement === 20 ? 20 : item.enhancement + 1
  // if (item.enhancement == 20) {
  //   return {...item}
  // }
   // return { ...item, enhancement: item.enhancement + 1 };
  return { ...item, enhancement: e };
}

function fail(item) {
  const d = item.enhancement < 15 ? item.durability - 5 : item.durability - 10
  const e =  item.enhancement > 16 ? item.enhancement - 1 : item.enhancement
  return { ...item, durability:d, enhancement:e };
}

function repair(item) {
  return { ...item, durability:100 };
}

function get(item) {
  const n = item.enhancement > 0 ? `[+${item.enhancement}] ${item.name}` : item.name
  return { ...item, name:n };
}
