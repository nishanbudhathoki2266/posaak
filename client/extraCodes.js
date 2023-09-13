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

const findSecondLargest = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) continue; // Just making sure the same number of same index aren't compared

      if (arr[j] > arr[i]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr[arr.length - 2];
};

// console.log(findSecondLargest([2222, 111, 0, 1, 2, 7, 6, 4, 9, 12]));

// const arrTest = undefined;

// console.log(arrTest?.[0] ?? "Empty");

// States ->

// Local state , Global state, remote state, Derived state

// A -> B
// hr
// const [timeTakenToTravel, setTimeTakenToTravel] = useState(0 + "hr");

// derived state
// const timeTakenToTravelInMin = timeTakenToTravel * 60;

// const [firstName, setFirstName] = useState("");
// const [lastName, setLastName] = useState("");

// Derived state for full name
// const fullName = firstName + lastName;

// const [timeTakenToTravelInMin, setTimeTakenToTravelInMin] = useState();

// useEffect(() => {
//   setTimeTakenToTravelInMin(timeTakenToTravel * 60);
// }, [timeTakenToTravel]);

// UI -> Show timeTakenToTravel in min
// {timeTakenToTravelInMin * 60}

const coords = { lat: 51.12, lng: 7.088 };

coords["latitude"] = coords["lat"];
coords["longitude"] = coords["lng"];

delete coords["lat"];
delete coords["lng"];

// console.log(coords);

// true and undefined
const arrOfTable = [true, undefined];
const newArr = arrOfTable.map((item) => String(item));

// console.log(newArr);

//
const uniqueBooleanValues = () => {
  const values = new Set(); //for uniqe data sets
  preFilteredRows.forEach((row) => {
    const value = row.values[id];
    values.add(value !== undefined ? value.toString() : "undefined"); // Convert to string
  });
  return [...values];
};

/*
// Just for semantic purpose
<SectionContainer>

// uses tailwind's container class -> to define max-width
<Container>

// 12 columns grid
  <GridContainer>



  
  </GridContainer>
</Container>

</SectionContainer>



// Google Map COmponent
function GoogleMap () {

  return {
    <div className="col-span-full md:col-span-5"></div>
  }
}

// Google Map COmponent
function Card () {

  return {
    <div className="col-span-full md:col-span-4 lg:col-span-3"></div>
  }
}


*/

const trimStr = (str) => {
  let trimmedStr = "";
  let charCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (charCount === 10) {
      break;
    }

    if (str[i] === " ") {
      trimmedStr += str[i];
    } else {
      trimmedStr += str[i];
      charCount++;
    }
  }

  return trimmedStr + "...";
};

// console.log(trimStr("testing the code here just for testing"));

/*

2 , 7
7, 11


*/
const nums = [11, 2, 7, 15];

const target = 9;

// const indexResults = [];

// for (let i = 0; i < nums.length; i++) {
//   for (let j = i + 1; j < nums.length; j++) {
//     if (nums[i] + nums[j] === target) {
//       indexResults.push(i, j);
//     }
//   }
// }

// console.log(indexResults);
// Keeping iterated numbers in a memory
// const iteratedNums = {};

// for (let i = 0; i < arr.length; i++) {
//   const num = arr[i];
//   const matchingPair = target - num;

//   // Check if the matching pair of the current number is in the object
//   if (iteratedNums.hasOwnProperty(matchingPair)) {
//     return [iteratedNums[matchingPair], i];
//   }

//   // If not, add the current number and its index to the object
//   iteratedNums[num] = i;
// }

// // If no solution is found, return an empty array or null, depending on your requirements
// return [];

const twoSum = (arr, target) => {
  const iteratedNums = {};

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const matchingPair = target - num;

    if (!iteratedNums.hasOwnProperty(matchingPair)) {
      iteratedNums[num] = i;
    } else {
      return [i, iteratedNums[matchingPair]];
    }
  }

  return [];
};

console.log(twoSum([2, 11, 7, 15], 9));
