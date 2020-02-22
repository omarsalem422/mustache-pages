const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");

app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");

const PORT = process.env.PORT || 3000;

const user = {
  name: "John Doe",
  address: {
    street: "13433 Race Street",
    city: "Thornton",
    state: "CO",
    zipCode: "80241"
  }
};

let users = [
  { name: "John Doe", age: 34 },
  { name: "Jane Doe", age: 33 },
  { name: "Jack Smith", age: 54 }
];

app.get("/", (req, res) => {
  res.render("index", user);
});

users = [];

app.get('/users', (req,res) => {
  res.render('users', {users:users});
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
