/* pseudocode: 
  - loop through the numbers 1 to 20
  - if the current number is evenly divisible by 3 & 4, print "LoopyLighthouse"
  - if the current number is evenly divisible by 3, print "Loopy"
  - if the current number is evenly divisible by 4, print "Lighthouse"
  - if the current number is not evenly divisible by 3 &/or 4, print the current number
*/


for (let x = 1; x <= 20; x++) {
  let output = ""
  if (x % 3 === 0) {
    output += "Loopy";
  }
  if (x % 4 === 0) {
    output += "Lighthouse";
  }
  console.log(output === ""? x : output)
}
