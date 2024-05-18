const chai = require("chai");
const assert = chai.assert;

const shouldBuyCar = require("../shouldBuyCar.js");


describe('#shouldByCar()', () => {

  it("should return false if it's a hatchback", () => {
    const car = {
      type: "hatchback"
    };
    assert.isFalse(shouldBuyCar(car));
  });


  it("should return true if it's pink and not a hatchback", () => {
    const car = {
      color: "Pink",
      type: "sedan"
    };
    assert.isTrue(shouldBuyCar(car));
  });

  it("should return false when there are no details about the car", () => {
    const car = {
    };
    assert.isFalse(shouldBuyCar(car));
  });

  it("should return false if it's pink and a hatchback", () => {
    const car = {
      color: "Pink",
      type: "hatchBack"
    };
    assert.isFalse(shouldBuyCar(car));
  });

  it("should return true when the car has 6 litres/100km and is under or equal to $5,000", () => {
    const car = {
      price: 5000,
      litresPer100km: 6
    };
    assert.isTrue(shouldBuyCar(car));
  });

  it("should return true when the car has 11 litres/100km and is under or equal to $5,000", () => {
    const car = {
      price: 5000,
      litresPer100km: 11
    };
    assert.isTrue(shouldBuyCar(car));
  });

  it("should return false when the car has 6 litres/100km and is over $5,000", () => {
    const car = {
      price: 5001,
      litresPer100km: 6
    };
    assert.isFalse(shouldBuyCar(car));
  });

  it("should return false when the car has 11 litres/100km and is over $5,000", () => {
    const car = {
      price: 5001,
      litresPer100km: 11
    };
    assert.isFalse(shouldBuyCar(car));
  });

  it("should return false when the car has 5 litres/100km and is under or equal to $5,000", () => {
    const car = {
      price: 5000,
      litresPer100km: 5
    };
    assert.isFalse(shouldBuyCar(car));
  });

  it("should return false when the car has 12 litres/100km and is under or equal to $5,000", () => {
    const car = {
      price: 5000,
      litresPer100km: 12
    };
    assert.isFalse(shouldBuyCar(car));
  });

  it("should return undefined when there is no car", () => {

    assert.isUndefined(shouldBuyCar());
  });



  
});


const carFormat = {
  price: 1000,
  color: "Pink",
  type: "sedan",
  litresPer100km: 8
};
