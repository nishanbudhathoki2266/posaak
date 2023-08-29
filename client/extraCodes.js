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
