const router = require('express').Router();

router.get('/search/tracks', async (req,res) => { 
console.log(req.session.spotifyApi);
  req.session.spotifyApi.searchTracks('Love')
  .then(function(data) {
    console.log('Search by "Love"', data.body);
  }, function(err) {
    console.error(err);
  });
})
module.exports = router;