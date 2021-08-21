const router = require('express').Router();
const spotifyApiFactory = require('../../config/spotifyWrapper');
let keyword = "Lady Gaga"
let artist = "Kendrick Lamar"

// const SongName = `${Love}`

router.get('/search/tracks', async (req,res) => { 
console.log("SpotifyRoutes.js was called)");
console.log(req.query);
const spotifyApi = spotifyApiFactory(req.session.access_token, req.session.refresh_token);  
//spotifyApi.searchTracks(req.query.q)
//spotifyApi.searchTracks(`track:'${trackName} artist:'${artist}`)
console.log(`We are now searching by the keyword ${keyword} across artist,track,album etc` );
spotifyApi.searchTracks(`track:${keyword}`)
  .then( async function(data) {
      
      console.log(`Search by ${keyword}, Track: ${artist}`);
      console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
      console.log("This is the raw output of the data.body - JASON MA");
      console.log(data.body);
      console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
      console.log("This is the href to that track - JASON MA");
      console.log(data.body.tracks.href);
      console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
      console.log("This is the various items of that track - JASON MA");
      console.log(data.body.tracks.items);
      console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
      console.log('This is the output of the first album - JASON MA');
      console.log(data.body.tracks.items[0].album.name)
      console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
      console.log(`This is the output of the first 10 albums, with the keyword ${keyword}`);
      let fullTrack = data.body.tracks.items;
      for (let i = 0; i < fullTrack.length; i++) {
      console.log(data.body.tracks.items[i].album.name);
      }
    // put an {{each}} into the search template and a res.render so that we can see each individual item
    
    //console.log('Search by "Love"', data.body.tracks.items);
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

    console.log("after searching, we will redirect to the songresults page - JASON MA")

    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    res.render('songresults', {
      output1:data.body.tracks.items[0].album.name,
      output2:data.body.tracks.items[1].album.name,
      output3:data.body.tracks.items[2].album.name,
      output4:data.body.tracks.items[4].album.name,
      output5:data.body.tracks.items[5].album.name,
      logged_in: req.session.logged_in,
    });
  }, function(err) {
    // console.error(err);
  });
})
module.exports = router;