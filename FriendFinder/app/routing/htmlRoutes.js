var path = require('path');

// The below function will send the users diffrent pages it depends on the users' URL.
module.exports = function (app) {
		app.get('/survey', function(req, res) {
    	res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

		// use tells the compiler if you are using the app but did not define the URL, send the user to the home page.
		app.use(function(req, res) {
    	res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

}// end of exports

