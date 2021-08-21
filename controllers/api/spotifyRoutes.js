const router = require('express').Router();
const spotifyApiFactory = require('../../config/spotifyWrapper');
let trackName = "Alright"
let artist = "Kendrick Lamar"

// const SongName = `${Love}`

router.get('/search/tracks', async (req,res) => { 
console.log("SpotifyRoutes.js was called)");
console.log(req.query);
const spotifyApi = spotifyApiFactory(req.session.access_token, req.session.refresh_token);  
//spotifyApi.searchTracks(req.query.q)
//spotifyApi.searchTracks(`track:'${trackName} artist:'${artist}`)
spotifyApi.searchTracks(`track:${trackName} artist:${artist}`)
  .then( async function(data) {
      
      console.log(`Search by ${trackName}, Track: ${artist}`);
      console.log(data.body);
      console.log("This is the href to that track");
      console.log(data.body.tracks.href);
      console.log("This is the various items of that track");
      console.log(data.body.tracks.items);
      console.log("This is the limited output of that album");
      let fullTrack = 2;
      for (let i = 0; i <= fullTrack; i++) {
      console.log(data.body.tracks.items[i].album.name);
      }
    // put an {{each}} into the search template and a res.render so that we can see each individual item
    
    //console.log('Search by "Love"', data.body.tracks.items);
    
    res.render('songresults', {
      
      logged_in: req.session.logged_in,
    });
  }, function(err) {
    // console.error(err);
  });
})
module.exports = router;