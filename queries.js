/* Fill out these functions using Mongoose queries*/

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  Listing.find({name: "Library West"}, function(err, result) {
  console.log("Found " + result);
  })
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
  Listing.findOneAndRemove({ code: 'CABL' }, function(err, listing) {
  if (err) throw err;
  console.log("Deleted " + listing);
  });
};
var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
  Listing.findOneAndUpdate({ name: 'Phelps Laboratory' }, { address: '701 N Broadway' }, function(err, listing) {
  if (err) throw err;
  console.log("Updated " + listing);
});
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
  Listing.find({}, function(err, listing) {
  if (err) throw err;
  console.log(listing);
  mongoose.connection.close();
});
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();
