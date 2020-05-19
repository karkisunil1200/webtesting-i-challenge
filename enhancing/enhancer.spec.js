const enhancer = require("./enhancer.js");
// test away!

describe("test repair", () => {
  //act
  it("should increase durability to 100", () => {
    const item = { name: "sword", enhancement: 15, durability: 80 };
    const result = enhancer.repair(item);
    expect(result.durability).toBe(100);
  });
});

describe("test succeeds", () => {
  //act
  it("should increase enhancement by 1", () => {
    const item = { name: "sword", enhancement: 15, durability: 80 };
    const result = enhancer.succeed(item);
    expect(result.enhancement).toBe(16);
  });

  it("should not increase enhancement if 20", () => {
    const item = { name: "sword", enhancement: 20, durability: 80 };
    const result = enhancer.succeed(item);
    expect(result.enhancement).toBe(20);
  });

  it("should not change durability", () => {
    const item = { name: "sword", enhancement: 20, durability: 80 };
    const result = enhancer.succeed(item);
    expect(result.durability).toBe(80);
  });
});


describe("test fails", () => {
  //act
  it("enhancement less than 15", () => {
    const item = { name: "sword", enhancement: 10, durability: 80 };
    const result = enhancer.fail(item);
    expect(result.durability).toBe(75);
  });

  it("enhancement greater than 15", () => {
    const item = { name: "sword", enhancement: 20, durability: 80 };
    const result = enhancer.fail(item);
    expect(result.durability).toBe(70);
  });

  it("enhancement level is decreased", () => {
    const item = { name: "sword", enhancement: 18, durability: 80 };
    const result = enhancer.fail(item);
    expect(result.enhancement).toBe(17);
  });
});

describe("test get", () => {
  //act
  it("should change name", () => {
    const item = { name: "sword", enhancement: 15, durability: 80 };
    const result = enhancer.get(item);
    expect(result.name).toBe("[+15] sword");
  });
    it("should not change name if 0", () => {
      const item = { name: "sword", enhancement: 0, durability: 80 };
      const result = enhancer.get(item);
      expect(result.name).toBe("sword");
    });
});