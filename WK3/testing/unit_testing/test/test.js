const chai = require("chai");
const assert = chai.expect;
const validator = require("../javascript/groupValidator.js");

describe("The function groupValidator()", () => {

  it("should return true if there are between 2 and 5 group members", () => {
    assert(validator.isGroupValid(["a", "b", "c"])).to.be.true;
  });

  it("should return false if there are fewer than 2 group members", () => {
    assert(validator.isGroupValid(["a"])).to.be.false;
  });

  it("should return false if there are more than 5 group members", () => {
    assert(validator.isGroupValid(["a", "b", "c", "d", "e", "f"])).to.be.false;
  });
  
});