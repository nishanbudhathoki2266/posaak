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

console.log(newArr);
