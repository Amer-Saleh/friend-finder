// we here pulling data from friend.js
//This will be used to display a JSON of all possible friends.
var friendsData = require('../data/friends.js');

module.exports = function (app) {
	app.get('/api/friends', function (req, res) {
		res.json(friendsData);
	});

    /* This will be used to handle incoming survey results.
       This route will also be used to handle the compatibilty logic. */
	app.post('/api/friends', function (req,res) {
			//friendsData.push(req.body);
	
  var newFriend = req.body;

  console.log(newFriend);

  friendsData.push(newFriend);
  console.log(newFriend.scores);

	res.json(newFriend);
	var stringOutput = JSON.stringify(friendsData);
	var obj = JSON.parse(stringOutput);
  		
  		
       console.log("the Scores: " + obj);    
       //console.log("the one before the last one: " + friendsData[friendsData.length-2]); 
		
	});

	 //-----------------------------


	//------------------------------
} // end of exports