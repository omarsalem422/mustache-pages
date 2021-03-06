const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const mustacheExpress = require("mustache-express");
const userRoutes = require("./routes/users");
//const authenticate = require("./routes/users");
const session = require('express-session');

app.use(session({
  secret: 'Complex Formula',
  resave: true,
  saveUninitialized: false
}));

const VIEWS_PATH = path.join(__dirname, '/views');
app.use(bodyParser.json() );
app.use(bodyParser.urlencoded({extended: false}) );

// http://localhost:3000/site.css 'css' is an alias it could be anything ...
app.use('/css', express.static('css'));

app.use('/img', express.static('images'));

app.use('/users', userRoutes);

app.engine("mustache", mustacheExpress(VIEWS_PATH + '/partials', '.mustache'));
app.set("views", VIEWS_PATH);
app.set("view engine", "mustache");

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
