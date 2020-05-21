const enhancer = require('./enhancer.js');
// test away

describe('enhancer repaire', () => {
  it('should return a new item with the durablity restored to 100', () => {
    const item = {name: 'itemA', durability: 29, enhancement: 20};
    const newItem = enhancer.repair(item);

    expect(newItem.durability).toBe(100);
  });
});

describe('enhancer success', () => {
  it('The item enhancement increases by 1', () => {
    const item = {name: 'itemA', durability: 19, enhancement: 10};
    const newItem = enhancer.succeed(item);

    expect(newItem.enhancement).toBe(11);
  });
});
