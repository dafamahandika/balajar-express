const { Router } = require("express");

const router = Router();

const markets = [
  {
    store: "Indomaret",
  },
  {
    store: "Alfamaret",
  },
  {
    store: "Alfamidi",
  },
  {
    store: "SuperIndo",
  },
];

router.get("", (req, res) => {
  res.send(markets);
});

module.exports = router;
