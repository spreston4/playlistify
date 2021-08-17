const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApiFactory = (accessToken, refreshToken) => {
  const api = new SpotifyWebApi({
    clientId:  process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    redirectUri: process.env.SPOTIFY_REDIRECT_URI,
 
  });
   if(accessToken) api.setAccessToken(accessToken);
   if(refreshToken) api.setRefreshToken(refreshToken);
  return api;
}
  




module.exports = spotifyApiFactory;