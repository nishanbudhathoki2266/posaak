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

const obj = {
  username: "ram",
};
