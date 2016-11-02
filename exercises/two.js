/* jshint esversion:6 */

// var id1;
// var id2;
// var id3;

module.exports = function(mongoose, Checkout, Movie) {
	// Which users checked out any of the Lord of the Rings trilogy?

Movie.find({$or:[
	{title: "The Lord of the Rings: The Return of the King"},
	{title: "The Lord of the Rings: The Fellowship of the Ring"},
	{title: "The Lord of the Rings: The Two Towers"}]}, (err, data) =>{
		if (err) {
			console.log(err);
			return;
		}
		id1 = data[0]._id;
		// console.log(data);
		id2 = data[1]._id;
		id3 = data[2]._id;
		Checkout.distinct('userId', {$or:[{movieId: id1}, {movieId: id2}, {movieId: id3}]}, (err, data) => {
			if (err) {
				console.log(err);
				return;
			}
			console.log(data.length + " people checked out movies from the trilogy");
		})
	});
};
