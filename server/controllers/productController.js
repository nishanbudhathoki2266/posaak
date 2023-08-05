const products = [
  {
    id: 1,
    name: "Shirt",
  },
  {
    id: 2,
    name: "Vest",
  },
];

exports.getAllProducts = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      products,
    },
  });
};
