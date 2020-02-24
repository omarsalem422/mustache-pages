const express = require("express");
const router = express.Router();

const users = [
  { name: "Omar", age: 35 },
  { name: "Tom", age: 75 },
  { name: "Jill", age: 55 }
];

function authenticate(req, res, next) {
  if (req.session) {
    if (req.session.name) {
      next();
    } else {
      res.redirect("/users/add-user");
    }
  } else {
    res.redirect("/users/add-user");
  }
}
router.get("/bank-accounts", authenticate, (req, res) => {
  if (req.session) {
    res.send("Bank Accounts");
  }
});
// localhost:3000/users
router.get("/", (req, res) => {
  const user = {
    name: req.session.name,
    age: req.session.age,
    address: {
      street: "13433 Race Street",
      city: "Thornton",
      state: "CO",
      zipCode: "80241"
    }
  };
  res.render("index", user);
});

router.get("/add-user", (req, res) => {
  res.render("add-user");
});

router.post("/add-user", (req, res) => {
  let name = req.body.name;
  let age = req.body.age;

  if (req.session) {
    req.session.name = name;
    req.session.age = age;
  }

  console.log(name, age);

  res.status(200).send();
});

router.get("/users", (req, res) => {
  res.render("users", { users: users });
});

module.exports = router;
//module.exports = authenticate;
