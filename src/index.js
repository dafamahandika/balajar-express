const express = require("express");
const productRoute = require("./routes/product")
const marketsRoute = require("./routes/market")

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded());

app.use((req, res, next) => {
  console.log(`${req.method}:${req.url}`), next();
});

app.use("/api/v1/product", productRoute)
app.use("/api/v1/markets", marketsRoute)

app.listen(PORT, () => console.log(`Running Express in ${PORT}`));

