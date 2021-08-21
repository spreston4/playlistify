const router = require('express').Router();
const { Playlist, Song } = require('../models');
const withAuth = require('../utils/auth');
const spotifyApiFactory = require('../config/spotifyWrapper');

// This will render all playlists in the database to the homepage, whether the user is logged in or not.
router.get('/', async (req, res) => {

  try {
    const playlistData = await Playlist.findAll({
      include: [{ model: Song }]
    });

    const playlists = playlistData.map((playlist) => playlist.get({ plain: true }));




    res.render('homepage', {
      playlists,
      logged_in: req.session.logged_in,
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

// This will render all playlists created by the currently logged in user to their djbooth page. User must be logged in to view this page.
// Replace " '/djbooth, withAuth, " once login functionality implemented - removed for testing purposes only.
router.get('/djbooth', async (req, res) => {

  try {
    const playlistData = await Playlist.findAll({
      where: { user: 'sam' },        // 'sam' for testing purposes only. replace with 'req.session.user' 
      include: [{ model: Song }],
    });

    const playlists = playlistData.map((playlist) => playlist.get({ plain: true }));


   
    
    res.render('djbooth', {
      playlists,
      logged_in: req.session.logged_in,
    });

  
  } catch (err) {
    res.status(500).json(err);
  }
});

// This will render the songs associated with an individual playlist to the viewplaylist page. User must be logged in to view their playlist.
// Replace " '/viewplaylist/:id, withAuth, " once login functionality implemented - removed for testing purposes only.
router.get('/viewplaylist/:id', async (req, res) => {

  try {
    // Get playlist data
    const playlistData = await Playlist.findByPk(req.params.id, {
      where: { user: 'sam' },        // 'sam' for testing purposes only. replace with 'req.session.user' 
    });

    const playlist = playlistData.get({ plain: true });
   
    // Ensure playlist exists
    if (!playlistData) {
      res.status(404).json({ message: 'No playlist found with that id!' });
      return;
    }

    // Get song data
    const songData = await Song.findAll({
      where: { playlist_id: playlist.id },
    });

    const songs = songData.map((song) => song.get({ plain: true }));

    // Jason Ma - Lets see what data songs and playslist give"
    console.log(playlist);
    console.log(songs);

    res.render('viewplaylist', {
      playlist,
      songs,
      logged_in: req.session.logged_in
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

// This will render the searchsong page. We are passing the playlist id in order to keep track of which playlist the search is associated with - this should ulitmately allow us to add a song to the playlist from the songresults page. User must be logged in to view this page.
// Replace " '/searchsong/:id, withAuth, " once login functionality implemented - removed for testing purposes only.
router.get('/searchsong/:id', async (req, res) => {

  try {
    const playlistData = await Playlist.findByPk(req.params.id, {
      where: { user: 'sam' },        // 'sam' for testing purposes only. replace with 'req.session.user' 
    });

    const playlist = playlistData.get({ plain: true });

    res.render('searchsong', {
      playlist,
      logged_in: req.session.logged_in,
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

// This will render the searchresults page. We are passing the playlist id in order to keep track of which playlist we will add the song to. User must be logged in to view this page.
// Replace " '/songresults/:id, withAuth, " once login functionality implemented - removed for testing purposes only.
router.get('/songresults/:id', async (req, res) => {

  try {
    const playlistData = await Playlist.findByPk(req.params.id, {
      where: { user: 'sam' },        // 'sam' for testing purposes only. replace with 'req.session.user' 
    });

    const playlist = playlistData.get({ plain: true });

    res.render('songresults', {
      playlist,
      logged_in: req.session.logged_in,
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

// This will render the newplaylist page inorder to allow the user to create a new playlist that will be associated with the logged in user. user must be logged in to view.
// Replace " '/newplaylist, withAuth, " once login functionality implemented - removed for testing purposes only.
router.get('/newplaylist', async (req, res) => {

  try {
    res.render('newplaylist', {
      user: 'sam',        // 'sam' for testing purposes only. replace with 'req.session.user' 
      logged_in: req.session.logged_in,
    })

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/viewplaylistpublic/:id', async (req, res) => {

  try {
    // Get playlist data
    const playlistData = await Playlist.findByPk(req.params.id);

    const playlist = playlistData.get({ plain: true });

    // Ensure playlist exists
    if (!playlistData) {
      res.status(404).json({ message: 'No playlist found with that id!' });
      return;
    }

    // Get song data
    const songData = await Song.findAll({
      where: { playlist_id: playlist.id },
    });

    const songs = songData.map((song) => song.get({ plain: true }));

    res.render('viewplaylistpublic', {
      playlist,
      songs,
      logged_in: req.session.logged_in,
    });

  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  var scopes = ['user-read-private', 'user-read-email'],
    redirectUri = 'http://localhost:3001/api/users/login',
    clientId = 'f61cd24f13634874a2c1dfc3411dd2a5';
  //state = 'some-state-of-my-choice';

  // Setting credentials can be done in the wrapper's constructor, or using the API object's setters.
  /*var spotifyApi = new SpotifyWebApi({
    redirectUri: redirectUri,
    clientId: clientId
  });
  */
  // Create the authorization URL
  const authorizeURL = spotifyApiFactory().createAuthorizeURL(scopes);

  // https://accounts.spotify.com:443/authorize?client_id=5fe01282e44241328a84e7c5cc169165&response_type=code&redirect_uri=https://example.com/callback&scope=user-read-private%20user-read-email&state=some-state-of-my-choice
  console.log(authorizeURL);
  res.redirect(authorizeURL);
});



// Jason Code 

router.get('/viewplaylist', (req,res) => {
  if(req.session.logged_in) {
    res.redirect('/djbooth')
  } else {
    res.render('djbooth', {
      logged_in:false
    })
  }
})


router.get('/logout', (req, res) => {
  
  req.session.destroy(() => {
    res.status(204).end();
  });

  res.render('homepage', {
    logged_in: false
  })
})


module.exports = router;
