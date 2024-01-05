/*
reverse function:
X takes any number of string command line args
X revserses the args
X console logs reversed args one at a time
*/

const argsArr = process.argv.splice(2);

const reverse = function(args) {
  for (const a of args) {
    let revArg = "";
    for (let l = a.length - 1; l >= 0; l--) {
      revArg += (a[l]);
    } console.log(revArg);
  }
};

reverse(argsArr);