const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

const PORT = process.env.PORT || 3000;

app.get('/', (req,res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
