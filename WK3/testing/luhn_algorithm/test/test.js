const chai = require("chai");
const assert = chai.assert;

const check = require("../luhn_check.js");

describe("#check()", () => {

  it("should return true if a given number is valid", () => {
    assert.isTrue(check(12345674));
  });

  it("should return false if a given number is not valid", () => {
    assert.isFalse(check(13245674));
  });
});