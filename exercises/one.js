/* jshint esversion:6 */



module.exports = function(mongoose, Checkout, Movie) {
	// What user(s) had the most checkouts?

	// Checkout.find({}, (err, data) => {

	// 	if (err) {
	// 		console.log(err);
	// 		return;
	// 	}
	// 	console.log(data);
	// });


	Checkout.aggregate([{ "$group": {
								"_id": '$userId',
								"recommendCount": { "$sum": 1 }
								}
						}, { "$sort": {
								"recommendCount": -1
								}
						},{"$limit": 1}
					],
    function(err,result) {
    	console.log("User " + result[0]._id +" had the most checkouts.");
    });
};

// console.log("IS THIS THING ON?");
