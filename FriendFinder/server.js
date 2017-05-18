// bodyParser allow us to recive data in json form, so it is easy to mainpulate
var bodyParser = require('body-parser');

var express = require('express');

var path = require ('path');
var app = express();
var PORT = process.env.PORT || 3001;
 
 // parse application/json 
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: true }));
 
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
 
// the following code telling the compiler to include api-routes and html-routes.js file to the server.js file.
// we need to require api-routes.js first because from api-routes.js we pull the data first to display it in html pages.
require ('./app/routing/apiRoutes.js') (app);
require ('./app/routing/htmlRoutes.js') (app);

app.listen (PORT, function () {
	console.log("App listening on PORT: " + PORT);
});