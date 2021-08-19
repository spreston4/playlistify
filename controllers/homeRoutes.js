const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');
const spotifyApiFactory = require('../config/spotifyWrapper');


router.get('/', async (req, res) => {
  try {
    // const playlistData = await Playlist.findAll({
    //   include: [{ model: User, attributes: ['username'] }]
    // });

    // const playlists = playlistData.map((playlist) => playlist.get({ plain: true }));

    // res.render('homepage', {
    //   playlists,
    //   logged_in: req.session.logged_in,
    // });

    res.render('homepage');

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/djbooth', async (req, res) => {

  try {

    res.render('djbooth')

  } catch (err) {
    res.status(500).json(err);
  }
});

// Need to update to account for playlist id
router.get('/viewplaylist', async (req, res) => {

  try {

    res.render('viewplaylist')

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/searchsong', async (req, res) => {

  try {

    res.render('searchsong')

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/songresults', async (req, res) => {

  try {

    res.render('songresults')

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/newplaylist', async (req, res) => {

  try {

    res.render('newplaylist')

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/viewplaylistpublic', async (req, res) => {

  try {

    res.render('viewplaylistpublic')

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', withAuth, async (req, res) => {
  res.render('profile');
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

module.exports = router;
