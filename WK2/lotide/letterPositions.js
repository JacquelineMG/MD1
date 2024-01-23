// letterPositions takes in a string and returns an object that includes the letter (as key) and its incides (as value)

const letterPositions = function(sentence) {
  const positionObj = {};
  const sentenceEdit = sentence.replace(/\s/g, '').toUpperCase();

  for (let i = 0; i <= sentenceEdit.length - 1; i++) {
    if (positionObj[sentence[i]]) {
      positionObj[sentence[i]] = ;
    } else {
      positionObj[sentence[i]] = ;
    }
  }
  console.log(positionObj);
};

letterPositions("THIS Is a Sentence");


