const enhancer = require('./enhancer.js');
// test away

describe('enhancer', () => {
  describe('repair', () => {
    it('should return a new item with the durablity restored to 100', () => {
      const item = {name: 'itemA', durability: 29, enhancement: 20};
      const newItem = enhancer.repair(item);

      expect(newItem.durability).toBe(100);
    });
  });
});
