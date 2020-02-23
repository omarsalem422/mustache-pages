const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
  const user = {
    name: "John Doe",
    address: {
      street: "13433 Race Street",
      city: "Thornton",
      state: "CO",
      zipCode: "80241"
    }
  };
  res.render('index', user)
});

router.get('/add-user', (req,res) => {  
  res.render('add-user');
});

router.post('/add-user', (req,res) => {
  let name = req.body.name;
  let age = req.body.age;

  console.log(name, age);

  res.status(200).send();

});

router.get('/users', (req,res) => {
  res.render('users', {users:users});
});

module.exports = router;