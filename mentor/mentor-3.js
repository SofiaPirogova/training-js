/1
// // Write a function that converts the argument values.
//  If it will be a string, convert it to number and wise versa.
// // It should return an array of converted values.
// convert('1', 2, 3, '4') // [1, '2', '3', 4]
// 1
const x = function (...args) {
    const array = [];
    for (let i of args) {
        if (typeof i === "number") {
            array.push(String(i));
        } else {
            array.push(Number(i));
        }
    }
    return array;
}
console.log(x('1', 2, 3, '4'));
// 2
const x = ['1', 2, 3, '4', 7, "7"];
const array = x.map(number => typeof number === "number" ? String(number) : Number(number)); 

// #2
// Write a function - positiveSum
// It should accept an array of numbers and return a result of their addition.
// But you must calculate only positive numbers and omit negative if any presents.
// For example:
// positiveSum([2, 4, 6, 8])   // => 20
// positiveSum([0, -3, 5, 7])  // => 12
const a = [2, 4, 6, 8];
const b = [0, -3, 5, 7];
const positiveSum = function (args){
    return args.filter(number => number > 0).reduce((acc, number) => acc += number);
}
console.log(positiveSum(b));
const positiveSum = function (args){
    return args.reduce((acc, number) => number > 0 ? acc += number : acc);
}
console.log(positiveSum(a));
// #3
// Write a function – letterCount
// It accepts two string arguments and returns an integer of the count
// of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.
// For example:
// letterCount("Maggy", "g") // => 2
// letterCount("Barry", "b") // => 1
// letterCount("", "z")      // => 0
// const letterCount = function (string, letter) {
//   const lettersArr = string.toLowerCase().split("");
//   const lettersSum = lettersArr.filter(elem => elem === letter).length;
//   return lettersSum;
// }
// console.log(letterCount("MagggggGGGy", "g"))
//reduce
// const letterCount = function (string, letter) {
//   const lettersArr = string.toLowerCase().split("");
//   const lettersSum = lettersArr.reduce((acc, elem) =>  elem === letter? acc+=1:acc , 0);
//   return lettersSum;
// }
// console.log(letterCount("Maggy", "g"));


// #4
///////////////////////////////////4////////////////////////////////////////
// Our football team completed the championship. The result of each match look like "x:y".
// Results of all matches are recorded in the collection like this: ["3:1", "2:2", "0:1", ...]
// Write a function – countPoints
// It should accept a collection of football games scores and count the
// points of our team in the championship.
// Rules for counting points for each match:
// •  if x > y   - 3 points
// •  if x < y   - 0 point
// •  if x = y   - 1 point
// For example:
// countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']) // => 17
// countPoints(['1:1', '1:2', '2:0', '4:2', '0:1', '2:3', '1:1', '0:1', '1:1', '3:0']) // => 12
// const countPoints = function (array) {
//   const points = array.reduce((acc, elem) => {
//     if (Number(elem[0]) > Number(elem[2])) {
//      return acc += 3;
//     } else if (Number(elem[0]) === Number(elem[2])) {
//      return acc += 1;
//     } else {
//      return acc
//     }
//   }, 0)
//   return points;
// }
// console.log(countPoints(['1:1', '1:2', '2:0', '4:2', '0:1', '2:3', '1:1', '0:1', '1:1', '3:0']))
// const countPoints = function (array) {
//   const points = array.reduce((acc, elem) => {
//     const elemArr = elem.split(":");
//     console.log(elemArr)
//     if (Number(elemArr[0])> Number(elemArr[1])) {
//       return (acc += 3);
//     } else if (Number(elemArr[0]) === Number(elemArr[1])) {
//       return (acc += 1);
//     } else {
//       return acc;
//     }
//   }, 0);
//   return points;
// };
// console.log(
//   countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0'])
// );
// const countPoints = function (array) {
//   const pointWin = array.filter(elem => Number(elem[0]) > Number(elem[2]));
//   console.log(pointWin)
//   const point = array.filter(elem => Number(elem[0]) === Number(elem[2]));
//   console.log(point)
//   return pointWin.length*3+point.length
// }
// console.log(
//   countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0'])
// );


// 5
function getSums(array) {
    const elementSum = array.reduce((acc, item, index) => {
       return index === 0
        ? [item]
        : [...acc, (item + acc[acc.length - 1])]
    }
         , []);
return elementSum
}
console.log(getSums([1]))
console.log(getSums([1, 2]))
console.log(getSums([1, 2, 3]));
console.log(getSums([1, 2, 3, 4]));
console.log(getSums([1, 2, 3, 4, 5]));