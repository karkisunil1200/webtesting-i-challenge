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

describe('enhancer fail', () => {
  it('changes durabiltiy if echancement is more than 15', () => {
    const item = {name: 'itemA', durability: 10, enhancement: 10};
    const newItem = enhancer.fail(item);
    if (newItem.enhancement < 15) {
      expect(newItem.durability).toBe(5);
    }
  });

  it('durability decreases by 10 ', () => {
    const item = {name: 'itemA', durability: 15, enhancement: 15};
    const newItem = enhancer.fail(item);

    if (newItem.enhancement > 15) {
      expect(newItem.durability).toBe(5);
    }
  });

  it('enhancement decreases if over 16', () => {
    const item = {name: 'itemA', durability: 15, enhancement: 15};
    const newItem = enhancer.fail(item);

    if (newItem > 16) {
      expect(newItem.enhancement).toBe(14);
    }
  });
});

// If the item's enhancement is less than 15, the durability of the item is decreased by 5.
// If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
// If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17)
