const arr = [
  {
    id: "64cf7f75a804740126a04985",
    name: "Lilipot Gown",
    price: 300,
    image: "product-64cf73bd9fba480ec59ec3ae-1691329883208-1.jpeg",
  },
  {
    id: "64d8a907bbeddaa7facab834",
    name: "Barbie Frock",
    price: 400,
    image: "product-64cf73bd9fba480ec59ec3ae-1691329883211-2.jpeg",
  },
];

// console.log(arr.filter((pr) => pr.id !== "64cf7f75a804740126a04985"));

const z = "hell@gmail.com";
const y = "2323";

const checkIfStringIsNum = (str) => {
  const convertedStr = +str;
  if (isNaN(convertedStr)) {
    return "String";
  }
  return "Number";
};

// console.log(checkIfStringIsNum(z));
// console.log(checkIfStringIsNum(y));

let variableA = "hello";
variableA = "world";
variableA = 1;

let variableB = "hello";
variableB = "world";
variableB = 1;

const variableC = [];
// #Task - write a syntax to push the string "hello world" inside variableC
variableC.push("Hello World");

const variableD = {};
// #Task - write a syntax to push a key called "foo" with value "bar" inside variable D
variableD["foo"] = "bar";

// #Task - Determine Output
// console.log(variableA, variableB, variableC, variableD);

// const name = "ram";

// let state = {
//   name: "hari",
//   age: 50,
// };

// state = { ...state };

// console.log(state);

const sum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

// console.log(sum([1, 2, 3, 4, 5, 5, 6]));
