const router = require('express').Router();
const spotifyApiFactory = require('../../config/spotifyWrapper');
const SongName = "Love"
// const SongName = `${Love}`

router.get('/search/tracks', async (req,res) => { 
console.log(req.query);
const spotifyApi = spotifyApiFactory(req.session.access_token, req.session.refresh_token);  
spotifyApi.searchTracks(req.query.q)
  .then(function(data) {
   
      console.log('Search by "Love"', data.body.tracks.items);
    // put an {{each}} into the search template and a res.render so that we can see each individual item
    
    //console.log('Search by "Love"', data.body.tracks.items);
  }, function(err) {
    // console.error(err);
  });
})
module.exports = router;