const router = require('express').Router();
const spotifyApiFactory = require('../../config/spotifyWrapper');
const SongName = "Love"
// const SongName = `${Love}`

router.get('/searchsong', async (req,res) => { 
console.log(req.query);
const spotifyApi = spotifyApiFactory(req.session.access_token, req.session.refresh_token);  
spotifyApi.searchTracks(req.query.q)
  .then(function(data) {
   
      console.log('Search by "stay"', data.body.tracks.items);
    // put an {{each}} into the search template and a res.render so that we can see each individual item
    
    //console.log('Search by "Love"', data.body.tracks.items);
  }, function(err) {
    // console.error(err);
  });
});

router.get('/audiofeatures', async (req,res) =>{
  const spotifyApi = spotifyApiFactory(req.session.access_token, req.session.refresh_token); 
  spotifyApi.getAudioFeaturesForTrack(req.query.q)
  .then(function(data){
    console.log(data.danceability);
  }
  )
});

router.get('/userplaylists', async (req,res)=>{
  const spotifyApi = spotifyApiFactory(req.session.spotify_user);
  spotifyApi.getUserPlaylists(req.query.q)
  .then(function(data){
    console.log(data)
  })
});







module.exports = router;