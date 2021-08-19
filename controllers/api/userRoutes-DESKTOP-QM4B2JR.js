const router = require('express').Router();
const { User } = require('../../models');
const  spotifyApiFactory =  require('../../config/spotifyWrapper');

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/login', async (req, res) => {
  const code = req.query.code;
  const spotifyApi = spotifyApiFactory();
  console.log(code);
  try {
    spotifyApi.authorizationCodeGrant(code).then(
     ay function(data) {
        console.log('The token expires in ' + data.body['expires_in']);
        console.log('The access token is ' + data.body['access_token']);
        console.log('The refresh token is ' + data.body['refresh_token']);
    
        // Set the access token on the API object to use it in later calls
        // spotifyApi.setAccessToken(data.body['access_token']);
        // spotifyApi.setRefreshToken(data.body['refresh_token']);
        console.log(data.body);
        req.session.save(() => {
          req.session.access_token = data.body.access_token;
          req.session.refresh_token = data.body.refresh_token;
          req.session.logged_in = true;
          res.redirect('http://localhost:3001/');


          router.get('get/user',async (req,res) => {
            const spotifyApi = spotifyApiFactory(req.session.access_token, req.session.refresh_token);  
            spotifyApi.getMe(req.query.q)
              .then(function(data) {
                console.log('Some information about the authenticated user', data.body);
              }, function(err) {
                console.log('Something went wrong!', err);
              });
            })
        });
      },
      function(err) {
        res.status(400).json(err);
        console.log('Something went wrong!', err);
      }
    );


  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
