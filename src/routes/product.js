const { Router } = require("express");

const router = Router();

const productList = [
  {
    item: "milk",
    quantity: 2,
  },
  {
    item: "cereal",
    quantity: 3,
  },
  {
    item: "water",
    quantity: 1,
  },
  {
    item: "popcorn",
    quantity: 4,
  },
];

router.get(
  "/",
  (req, res, next) => {
    console.log("Before Handling Request");
    next();
  },
  (req, res, next) => {
    res.send(productList);
    next();
  },
  () => {
    console.log("Finished Executing GET Method");
  }
);

router.get("/:item", (req, res) => {
  const { item } = req.params;
  const productItem = productList.find((product) => product.item === item);
  res.send(productItem);
});

router.post("/", (req, res) => {
  console.log(req.body);
  productList.push(req.body);
  res.send(201);
});

module.exports = router;
