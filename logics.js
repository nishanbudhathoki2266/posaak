const ExistingCart = [
  { id: "a", quantity: 5 },
  { id: "b", quantity: 1 },
];

const newProduct = {
  id: "a",
  name: "hawkins",
  price: 30,
};

const item = ExistingCart.find((item) => item.id === newProduct.id);

if (item) {
  item.quantity += 1;
} else {
  ExistingCart.push({ id: newProduct.id, quantity: 1 });
}

console.log(ExistingCart);

//  [
//     {id: 'a', quantity:6},
//     {id: 'b', quantity:1},
// ]

const testArr = ["a", undefined];

const newArr = testArr.filter((item) => item !== undefined);

// console.log(newArr);

const fetchUsers = async () => {
  try {
    const res = await fetch("http://localhost:8080/api/v1/products");
    const data = await res.json();
    console.log(data.data.products);
  } catch (err) {
    console.log(err);
  }
};

// fetchUsers();

const subjectAnalysis = [
  {
    topic: "Linear Equation",
    testGraph: {},
  },
  {
    topic: "Functions",
    testGraph: {},
  },
  {
    topic: "Graphs",
    testGraph: {},
  },
  {
    topic: "Linear Inequalities",
    testGraph: {
      correct: "0.00",
      incorrect: "100.00",
      unanswered: "0.00",
      accuracy: "0.00",
    },
  },
  {
    topic: "Sequence",
    testGraph: {
      correct: "60.00",
      incorrect: "40.00",
      unanswered: "0.00",
      accuracy: "60.00",
    },
  },
];

const emptyAnalysisArr = subjectAnalysis.filter((analysis) => {
  if (!analysis.testGraph.incorrect) return true;
  else return false;
});

const analysisArr = subjectAnalysis
  .filter((analysis) => {
    if (analysis.testGraph.incorrect) return true;
    else return false;
  })
  .sort(function (a, b) {
    return b.testGraph.incorrect - a.testGraph.incorrect;
  });

const finalAnalysisArr = [...analysisArr, ...emptyAnalysisArr];

console.log(finalAnalysisArr);
