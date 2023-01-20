//map => used to iterate the Array
//It always return the same length of output array as input array
// used to apply the logic(add, mul, sub)

var a = [2, 4, 5, 7, 2, 8, 3, 9];
a.map((data) => {
  return data * 2;
});
console.log(a);

// [2, 4, 5, 7, 2, 8, 3, 9]
//[4, 8, 10, 14, 4, 16, 6, 18]

var a = [4, 8, 6, 23, 1, 5];

a.map((abc) => {
  return `<p>${abc}</p>`;
});
console.log(a);
//['<p>4</p>','<p>8</p>' , '<p>6</p>', '<p>23</p>', '<p>1</p>', '<p>5</p>']
//<p>4</p>
//<p>8</p>
//<p>6</p>
//<p>23</p>
//<p>1</p>
//<p>5</p>

//filter =>  used to filter out the values
// It may or may not return the same length of output array as input array
// filter only return those data for which the output when the condition is true

var a = [2, 5, 3, 7, 8, 2, 7, 9, 3, 5, 6, 7, 12, 24, 28, 60];

a.filter((data1) => {
  return data1 > 20;
});
//[ 24, 28, 60]

var b = [-1, 0, 1, 2];
b.map((data) => {
  return data * 2;
});
console.log(b); // [-2, 0, 2, 4]

b.filter((data) => {
  return console.log(data);
});

//[-1, 1, 2]

//filter odd values
const arr = [5, 1, 2, 3, 6];
const output = arr.filter(isOdd);
function isOdd(x) {
  return x % 2;
}
console.log(output);
//[5, 1, 3]

//reduce =>  take element of array and returns single value
//eg => max num/largest num in array
const arr1 = [5, 1, 2, 3, 6];
//sum without reduce

function findSum(arr1) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum = sum + arr1[i];
  }
  return sum;
}
console.log(findSum(arr1)); // 17

//with reduce
const result = arr1.reduce(function (acc, curr) {
  acc = acc + curr;
  //      0, 5, 1, 2, 3, 6
  return acc;
}, 0); // acc initial value

console.log(result); // 051236
//[5, 1, 2, 3, 6]

const arr2 = [5, 1, 2, 3, 6];
const initialValue = 0;
const sum = arr2.reduce((acc, curr) => acc + curr, initialValue);
console.log(sum); //17
