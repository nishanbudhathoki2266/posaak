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

    if (!(matchingPair in iteratedNums)) {
      iteratedNums[num] = i;
    } else {
      return [i, iteratedNums[matchingPair]];
    }
  }

  return [];
};

// time comp. o(n)
// space comp. o(n)

// console.log(twoSum([2, 11, 7, 15], 9));

const tAndC = [
  {
    heading: "Acceptance of the Terms",
    description:
      'Sessami\'s products, features and offerings are available made available through www.sesami.co and app.sessami.co. All of these are collectively referred to as "Sessami Properties" or our "Services". The material, including without limitation information, data, text, editorial content, design elements, look and feel, formatting, graphics, images, photographs, videos, music, sounds and other content contained in or delivered via the Services or otherwise made available by Sessami in connection with the Services is the "Site Content" (or "Content"). Any material (including the foregoing categories) that you contribute, provide, post or make available using the Services is "Your Content." \n\nWhen these Terms use the term "Organiser," we mean event creators using the Services to create events displayed on the Services for consumers using our Services (a) to consume information about or attend Events ("Consumers"), or (b) for any other reason. Organisers, Consumers and third parties using our Services are all referred to in these Terms collectively as "Users," "you" or "your." \n\nWhen these Terms use the term "Sessami," "we," "us," or "our," that refers to Sessami, Inc. and its affiliates, and subsidiaries, and each of its and their respective officers, directors, agents, partners and employees. \n\nIf you are an Organiser offering events with paid tickets, Sessami\'s Merchant Agreement and Organiser Refund Policy Requirements are also applicable to you. If you are an Organiser or Consumer, Sessami\'s Community Guidelines are applicable to you. (Some, but not all, of the terms in those agreements are duplicated in these Terms). If you are a third party interacting with our Services not as an Organiser or a Consumer, the API Terms of Use or Trademark and Copyright Policy might be applicable to you. Please be on the lookout for additional terms and conditions displayed with certain Services that you may use from time to time as those will also be applicable to you. And, by agreeing to these Terms, you acknowledge you have read the Privacy Policy and Cookie Statement applicable to all Users. We may sometimes provide you with services that are not described in these Terms, or customised services: unless we have entered into a separate, signed agreement that expressly supersedes these Terms, these Terms will apply to those services as well. \n\nThese Terms and the other documents referenced in them comprise Sessami\'s "Terms." These Terms are a legally binding agreement between you and Sessami governing your access to and use of the Services and setting out your rights and responsibilities when you use the Services. By using any of our Services (including browsing a Site), you are agreeing to these Terms. If you do not agree to these Terms, please do not use or access the Services. If you will be using the Services on behalf of an entity (such as on behalf of your employer), you agree to these Terms on behalf of that entity and its affiliates and you represent that you have the authority to do so. In such case, "you" and "your" will refer to that entity as well as yourself.',
    value: 20,
  },
  {
    heading: "Sessami's Services and Role",
    description:
      "Sessami's Services provide a simple and quick means for Organisers to create speaker profiles, organiser profiles, and other webpages related to their events, promote those pages and events to visitors or browsers on the Services or elsewhere online, manage online or onsite ticketing and registration, solicit donations, and sell or reserve merchandise or accommodations related to those events to Consumers or other Users. \n\nSessami is not the creator, organiser or owner of the events listed on the Services. Rather, Sessami provides its Services, which allow Organisers to manage ticketing and registration and promote their events. The Organiser is solely responsible for ensuring that any page displaying an event on the Services (and the event itself) meet all applicable local, state, provincial, national and other laws, rules and regulations, and that the goods and services described on the event page are delivered as described and in an accurate satisfactory manner. The Organiser of a paid event selects the payment processing method for its event as more fully described in the Merchant Agreement. \n\nConsumers must use whatever payment processing method the Organiser selects. If the Organiser selects a payment processing method that uses a third party to process the payment, then neither Sessami nor any of its payment processing partners processes the transaction but we transmit the Consumer's payment details to the Organiser's designated payment provider.",
    value: 10,
  },
  {
    heading: "Privacy and Consumer Information",
    description:
      "We know your personal information is important to you and it is important to Sessami too. Information provided to Sessami by Users or collected by Sessami through Sessami Properties, is governed by our Privacy Policy. If you are an Organiser, you represent, warrant and agree that (a) you will at all times comply with all applicable local, state, provincial, national and other laws, rules and regulations with respect to information you collect from (or receive about) consumers, and (b) you will at all times comply with any applicable policies posted on the Services with respect to information you collect from (or receive about) consumers.",
    value: 50,
  },
  {
    heading: "Term; Termination",
    description:
      "These Terms apply to you as soon as you access the Services by any means and continue in effect until they are terminated. There may come a time where either you or Sessami decides it's best to part ways as described below. When that happens, these Terms will generally no longer apply. However, as described below, certain provisions will always remain applicable to both you and Sessami. Sessami may terminate your right to use the Services at any time; \n\n• if you violate or breach these Terms;• if you misuse or abuse the Services, or use the Services in a way not intended or permitted by Sessami; or• if allowing you to access and use the Services would violate any applicable local, state, provincial, national and other laws, rules and regulations or would expose Sessami to legal liability. \n\nSessami may choose to stop offering the Services, or any particular portion of the Service, or modify or replace any aspect of the Service, at any time. We will use reasonable efforts to provide you with notice of our termination of your access to the Services, where, in Sessami's sole discretion, failure to do so would materially prejudice you. You agree that Sessami will not be liable to you or any third-party as a result of its termination of your right to use or otherwise access the Services. Except to the extent you have agreed otherwise in a separate written agreement between you and Sessami, you may terminate your access to the Services and the general applicability of Terms by deleting your account. \n\nIf you are a Consumer using the Services without a registered account, your only option for these Terms to no longer apply is to stop accessing the Services indefinitely. So long as you continue to access the Services, even without an account, these Terms remain in effect. If there is a separate agreement between you and Sessami governing your use of the Services and that agreement terminates or expires, these Terms (as unmodified by such agreement) will govern your use of the Services after such termination or expiration. All provisions of these Terms that by their nature should survive termination of these Terms will survive (including, without limitation, all limitations on liability, releases, indemnification obligations, disclaimers of warranties, agreements to arbitrate, choices of law and judicial forum and intellectual property protections and licences).",
    value: 5,
  },
];

// map, reduce, filter

// for (let i = 0; i < tAndC.length; i++) {
//   console.log(tAndC[i].heading);
// }

// tAndC.forEach((item) => {
//   console.log(item.heading);
// });

// ['heading1', 'heading2']
// map
const headingArray = tAndC.map((item) => item.heading);

const greaterThanTen = tAndC.filter((item) => item.value < 10);

// console.log(headingArray);
// console.log(greaterThanTen);

const numArr = [1, 2, 3, 4, 5];

// let totalSum = 0;

// for (let i = 0; i < numArr.length; i++) {
//   totalSum += numArr[i];
// }
// 0 => 0 + 1 = 1 , 2 + 1 => 3, 3 + 3 => 6 ... 15

// console.log(totalSum);

// const totalSum = numArr.reduce((acc, item) => acc + item, 0);

// console.log(totalSum);

const events = [
  {
    category: "",
    coords: "",
    createdAt: { __time__: "2023-05-18T11:53:15.660Z" },
    date: { __time__: "2023-05-18T11:52:41.019Z" },
    description: "",
    eventId: "01a1da3c-7924-4646-b0f2-fb83140aa0fc",
    eventType: "Music Events",
    hostId: "pdYDsCixpza1gbGQ4Dat4BGWStM2",
    image:
      "https://firebasestorage.googleapis.com/v0/b/sessami-58c65.appspot.com/o/pdYDsCixpza1gbGQ4Dat4BGWStM2%2Fb3679115-513f-44f3-af45-58914f5b119e%2FeventImage?alt=media&token=1e9e028d-d811-4e50-bfaa-9d436c77cda2",
    isPublished: true,
    name: "Keshav's Event",
    scanners: ["keshav@sessami.co"],
    tags: [{ label: "asdf", value: "asdf" }],
    termsAndConditions: true,
    tickets: [
      {
        capacity: 100,
        id: "9f77c2f1-9d46-448d-b15e-4e20b4ff6362",
        price: 10,
        sold: 0,
        type: { label: "Ticket", value: "ticket" },
      },
    ],
    venue: {
      coords: { lat: 32.2431872, lng: 77.1891761 },
      formattedAddress: "Manali, Himachal Pradesh, India",
      id: "7e3b2504-2413-49ea-b6fe-679322b2826a",
      name: "Breezeblock",
    },
    __collections__: {},
  },
  {
    category: "",
    coords: "",
    createdAt: { __time__: "2023-05-10T09:07:35.887Z" },
    date: { nanoseconds: 0, seconds: 1688824800 },
    description:
      "Looking to add some sparkle to your weekend? Look no further than the YCSWU Bottomless Brunch! From the moment you walk through the door at Duman on Bold Street, you'll be swept away by the infectious energy of this unforgettable event. \n\nWith 100 minutes of bottomless prosecco and stacks of pancakes, the fun doesn't have to end. Our talented DJ and Host will keep the party going with a playlist that blends the latest hits with timeless classics. You won't be able to resist joining in on the dance-offs and lip-sync battles! \n\nWhether you're celebrating a birthday, a breakup, or just looking for an excuse to spend the afternoon with your besties, the YCSWU Bottomless Brunch is the perfect destination. As if you needed more incentive, ticket holders can take advantage of unbeatable deals like £40 for a cocktail tree or 20% off any spirit and mixer. Join us and let loose - YOU CAN'T SIT WITH US! \n\nDon't miss out on the most exciting brunch event to hit Liverpool! At YCSWU Bottomless Brunch, you'll find more than just a meal - you'll find an unforgettable experience. Our DJs and hosts have created an atmosphere that's both electric and welcoming, making it the perfect place to unwind with friends. \n\nWith 100 minutes of free-flowing prosecco and a healthy pile of pancakes on offer, you'll never want to leave. But even beyond the good food and drink, the YCSWU Bottomless Brunch is a chance to let your hair down and have a laugh. With lip sync battles, dance-offs, and more, there's no shortage of entertainment. And, with exclusive deals like a £40 cocktail tree or 20% off your favourite spirits and mixers, you can't afford to miss out on this amazing event. Make your way to Duman Bold Street on 20/05/2023 for an adventure you'll never forget!",
    eventId: "08881ff3-43a3-4d33-b944-acec03810425",
    eventType: "Music Events",
    hostId: "lmggeiNc7mRM87VQdweZzR4QEmZ2",
    image:
      "https://firebasestorage.googleapis.com/v0/b/sessami-58c65.appspot.com/o/lmggeiNc7mRM87VQdweZzR4QEmZ2%2F67beb6ad-692f-43cb-91c6-1aba03ee650b%2FeventImage?alt=media&token=5d02ad93-31ee-43eb-a585-02167f20f95c",
    isPublished: true,
    name: "YCSWU - Bottomless Brunch",
    scanners: ["ycswu@sessami.co"],
    tags: [],
    termsAndConditions: true,
    tickets: [
      {
        capacity: 60,
        id: "436b028d-dad3-492a-8368-fb7ecd8ffb0f",
        price: 35,
        sold: 2,
        type: { label: "Ticket", value: "ticket" },
      },
    ],
    venue: {
      coords: { lat: 53.4040612, lng: -2.9805795 },
      formattedAddress: "Duman Bold Street, Bold Street, Liverpool, UK",
      id: "878f3ba5-3892-468c-be27-612b280afb71",
      name: "Duman",
    },
    __collections__: {},
  },
  {
    category: "Museum exhibitions",
    coords: "",
    createdAt: { nanoseconds: 404000000, seconds: 1685352936 },
    date: { nanoseconds: 0, seconds: 1685637000 },
    description: "Hello this is a test event",
    eventId: "0a8b6b2a-417d-437e-8d26-b0a09775c6cf",
    eventType: "Arts & Culture Events",
    formattedDate: "01/06/2023",
    formattedTime: "17:30",
    hostId: "qtF8ZcbR6yXrr61y046oHJcRAuG2",
    image:
      "https://firebasestorage.googleapis.com/v0/b/sessami-58c65.appspot.com/o/qtF8ZcbR6yXrr61y046oHJcRAuG2%2F0a8b6b2a-417d-437e-8d26-b0a09775c6cf%2FeventImage?alt=media&token=5132a42f-015d-4353-9711-e428b52a6eb6",
    isPublished: true,
    name: "Keshav Dulal Stand up set!",
    scanners: ["hello@sessami.co"],
    survey: [
      { isRequired: true, question: "Fav Song" },
      { isRequired: false, question: "fav movie" },
    ],
    tags: [],
    termsAndConditions: true,
    tickets: [
      {
        capacity: 100,
        id: "7ec78098-c422-4c1a-bb38-6573d84b3302",
        price: 20,
        sold: 5,
        type: { label: "General Admission", value: "General Admission" },
      },
    ],
    updatedAt: { __time__: "2023-06-01T12:23:59.056Z" },
    venue: {
      coords: { lat: 51.4865573, lng: 0.0373604 },
      formattedAddress: "The Valley, Floyd Road, London, UK",
      id: "5df39cf7-8231-431f-a197-a2939751bbcc",
      name: "The Valley",
    },
    __collections__: {},
  },
];

const filteredEvents = events.filter((event) => event.description === "");

// console.log(filteredEvents, filteredEvents.length);

const users = [
  { id: 1, name: "Nishan Budhathoki", country: "Nepal" },
  { id: 2, name: "Niruta", country: "UK" },
  { id: 3, name: "Nothing", country: "UK" },
  { id: 4, name: "test", country: "Bangladesh" },
  { id: 5, name: "test 2", country: "" },
  { id: 6, name: "test 3", country: "" },
];

// not in UK
const peopleNotInUK = users.filter((user) => user.country === "UK");

// const peopleNotInUK = [];

// for (let i = 0; i < users.length; i++) {
//   if (users[i].country !== "UK") {
//     peopleNotInUK.push(users[i]);
//   }
// }

console.log(peopleNotInUK);
