// urlEncode takes a string and returns a string with all internal whitespaces converted to %20 and front/end whitespaces removed
// must use a looping technique

const urlEncode = function(text) {
  const trimText = text.trim();
  let encodedText = "";

  for (let l of trimText) {
    if (l === " ") {
      encodedText += "%20";
    } else {
      encodedText += l;
    }
  }
  return encodedText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));