const assert = require("chai").assert;
const breedDetailsFromFile = require("../asyncBreeds");

const expectedBombay = "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.";
const expectedBalinese = "Balinese are curious, outgoing, intelligent cats with excellent communication skills. They are known for their chatty personalities and are always eager to tell you their views on life, love, and what you’ve served them for dinner.";
const expectedCalico = undefined;

describe("#breedDetailsFromFile", () => {
  it("provides, via callback, breed details for Bombay cats", done => {
    breedDetailsFromFile("Bombay", bombay => {
      assert.equal(expectedBombay, bombay);
      done();
    });
  });


  it("provides, via callback, breed details for Balinese cats", done => {
    breedDetailsFromFile("Balinese", balinese => {
      assert.equal(expectedBalinese, balinese);
      done();
    });
  });

  it("returns undefined, via callback, for breeds without details", done => {
    breedDetailsFromFile("Calico", calico => {
      assert.equal(expectedCalico, calico);
      done();
    });
  });
});