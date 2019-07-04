let repeatNumbers = function(data) {
  let output = data.map(function(innerArr) {
    let str = "";
    for (let i = 0; i < innerArr[1]; i++) {
      str += innerArr[0];
    }
    return str;
  });
  return output.join(", ");
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

//output 1111111111
//11, 222
//10101010, 343434343434, 9292

//The first will be the value to repeat, the second will be the amount of times to repeat that value.