//output: {h:1;e:1;l:2;o:1}
let input = "hello";

function countCharacter(input) {
  input.split("").reduce((a, b) => {
    a[b] = (a[b] || 0) + 1;
    return a;
  });
}
console.log(countCharacter(input));

// function countCharacter(input){
//     let result={}

//     for(let i =0; i<input.length;i++){

//     }
// }
