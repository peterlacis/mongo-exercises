module.exports = function(mongoose, Checkout, Movie) {
	//What is the title of the movie(s) that was the most checked out?

    Checkout.aggregate([{ "$group": {
								"_id": '$movieId',
								"recommendCount": { "$sum": 1 }
								}
						}, { "$sort": {
								"recommendCount": -1
								}
						},{"$limit": 1}
					],
    function(err,result) {
        mID = result[0]._id
        // console.log(mID);
        Movie.find({'_id': mID}, (err, data) =>{
        		if (err) {
        			console.log(err);
        			return;
        		}
        		console.log(data[0].title + " was the most cheked out movie");
            })
        // console.log("Movie " + result[0]._id +" had the most checkouts.");
    });
};
