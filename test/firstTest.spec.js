const assert = require("assert");

const sum = require("../src/sum");
const sub = require("../src/sub");
const div = require("../src/div");
const mult = require("../src/mult");
const sqrtFunc = require("../src/squareRoot");
const power = require("../src/power");

describe("sum", () => {
  it("Should return the sum of these numbers", () => {
    const result = sum(5, 10);
    assert.equal(result, 15);
  });
  it("Should return negative", () => {
    const result = sum(-5, -10);
    assert.equal(result, -15);
  });
  it("Should return positive number", () => {
    const result = sum(-10, 28);
    assert.equal(result, 18);
  });
});

describe("sub", () => {
  it("Should return the sub of these numbers", () => {
    const result = sub(138, 91);
    assert.equal(result, 47);
  });
  it("Should return an positive number", () => {
    const result = sub(-20, -40);
    assert.equal(result, 20);
  });
  it("Should return positive number", () => {
    const result = sub(30, -50);
    assert.equal(result, 80);
  });
  it("Should return negative number", () => {
    const result = sub(-30, 50);
    assert.equal(result, -80);
  });
});

describe("div", () => {
  it("Should return the division of these numbers", () => {
    const result = div(48, 2);
    assert.equal(result, 24);
  });
  it("Should return positive and approximate number", () => {
    const result = div(3, 49);
    assert.equal(result, 0.06);
  });
  it("Should return the negative number of that division", () => {
    const result = div(-56, 9);
    assert.equal(result, -6.22);
  });
  it("Should return negative number", () => {
    const result = div(60, -4);
    assert.equal(result, -15);
  });
  it("Should return postive", () => {
    const result = div(-90, -5);
    assert.equal(result, 18);
  });
});

describe("mult", () => {
  it("Should return the mult of these numbers", () => {
    const result = mult(5, 98);
    assert.equal(result, 490);
  });
  it("Should return the negative number of that multiplication", () => {
    const result = mult(23, -65);
    assert.equal(result, -1495);
  });
  it("Should return negative number", () => {
    const result = mult(-45, 3);
    assert.equal(result, -135);
  });
  it("Should return positve number", () => {
    const result = mult(-30, -9);
    assert.equal(result, 270);
  });
});

describe("sqrtFunc", () => {
  it("Should return the square root of this number", () => {
    const result = sqrtFunc(36);
    assert.equal(result, 6);
  });
  it("Should return broken number", () => {
    const result = sqrtFunc(2);
    assert.equal(result, 1.41);
  });
  it("Shouldn't return anything", () => {
    const result = sqrtFunc(-4);
    assert.equal(result, "Keep it real");
  });
});

describe("exponent", () => {
  it("Should return the result that number to the power of other number", () => {
    const result = power(3, 5);
    assert.equal(result, 243);
  });
  it("Should return negative number", () => {
    const result = power(-6, 5);
    assert.equal(result, -7776);
  });
  it("Should return negative and broken number", () => {
    const result = power(-9, -4);
    assert.equal(result, 0.000152);
  });
  it("Should return positve and broken number", () => {
    const result = power(7, -2);
    assert.equal(result, 0.020408);
  });
});
