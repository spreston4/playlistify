const router = require('express').Router();
const spotifyApiFactory = require('../../config/spotifyWrapper');

router.get('/search/tracks', async (req,res) => { 
console.log(req.session.spotifyApi);
const spotifyApi = spotifyApiFactory(req.session.access_token, req.session.refresh_token);  
spotifyApi.searchTracks('Love')
  .then(function(data) {
    console.log('Search by "Love"', data.body);
  }, function(err) {
    console.error(err);
  });
})
module.exports = router;