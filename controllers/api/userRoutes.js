const router = require('express').Router();
import { User } from '../../models';
import spotifyApiFactory from '../../config/spotifyWrapper';

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
      function(data) {
        console.log('The token expires in ' + data.body['expires_in']);
        console.log('The access token is ' + data.body['access_token']);
        console.log('The refresh token is ' + data.body['refresh_token']);
    
        // Set the access token on the API object to use it in later calls
        // spotifyApi.setAccessToken(data.body['access_token']);
        // spotifyApi.setRefreshToken(data.body['refresh_token']);
        console.log(data.body);
        req.session.save(() => {
          req.session.spotifyApi = spotifyApi;
          req.session.logged_in = true;


          
          res.redirect('http://localhost:3001/');

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

export default router;
