const router = require('express').Router();
const spotifyApiFactory = require('../../config/spotifyWrapper');
const SongName = "Love"
// const SongName = `${Love}`

router.get('/search/tracks', async (req,res) => { 
console.log(req.body);

const spotifyApi = spotifyApiFactory(req.session.access_token, req.session.refresh_token);  
spotifyApi.searchTracks('SongName')
  .then(function(data) {
    
    //console.log('Search by "Love"', data.body.tracks.items);
  }, function(err) {
    console.error(err);
  });
})
module.exports = router;