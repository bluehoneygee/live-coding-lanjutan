//output: {h:1;e:1;l:2;o:1}
let input = "hello";

function countCharacter(input) {
  input.split("").reduce((a, b) => (a[b] = (a[b] || 0) + 1));
}

console.log(countCharacter(input));
