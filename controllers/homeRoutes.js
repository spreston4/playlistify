const router = require('express').Router();
const { Project, User } = require('../models');
const withAuth = require('../utils/auth');
const spotifyApiFactory = require('../config/spotifyWrapper');

router.get('/', async (req, res) => {
    // Pass serialized data and session flag into template
    res.render('homepage');    
});

/*

router.get('/project/:id', async (req, res) => {
  try {
    const projectData = await Project.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const project = projectData.get({ plain: true });

    res.render('project', {
      ...project,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
*/
// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  const code = req.query.code;
  const spotifyApi = spotifyApiFactory();
  try {
    spotifyApi.authorizationCodeGrant(code).then(
      function(data) {
        console.log('The token expires in ' + data.body['expires_in']);
        console.log('The access token is ' + data.body['access_token']);
        console.log('The refresh token is ' + data.body['refresh_token']);
    
        // Set the access token on the API object to use it in later calls
        spotifyApi.setAccessToken(data.body['access_token']);
        spotifyApi.setRefreshToken(data.body['refresh_token']);
        console.log(data.body);
        req.session.save(() => {
          req.session.spotifyApi = spotifyApi;
          req.session.logged_in = true;


          
          res.redirect('http://localhost:3001/');

        });
      },
      function(err) {
        console.log('Something went wrong!', err);
      }
    );


  } catch (err) {
    res.status(400).json(err);
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

module.exports = router;
