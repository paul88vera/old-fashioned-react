const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(require("./controllers"));

app.get("/", (req, res) => {
  res.render("home", { layout: "main" });
});

app.listen(PORT, () => {
  console.log(`IT IS ALIVE in ${PORT}`);
});
