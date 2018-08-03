const numbers = [1, -1, 2, 3];

// Version 0
const filtered_0 = numbers.filter(function(value){
  return value >= 0;
});

// Version 1
const filtered_1 = numbers.filter(value => value >= 0);

// Version 2
const filtered_2 = numbers.filter(value => value >= 0);

console.log(filtered_0);
console.log(filtered_1);
console.log(filtered_2);

// OUTPUT
// [ 1, 2, 3 ]
// [ 1, 2, 3 ]
// [ 1, 2, 3 ]
