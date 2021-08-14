const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApiFactory = (accessToken, refreshToken) => {
  const api = new SpotifyWebApi({
    clientId:  process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    redirectUri: process.env.SPOTIFY_REDIRECT_URI,
    accessToken: setAccessToken(data.body['access_token']),
    refreshToken: setRefreshToken(data.body['refresh_token'])
  });

  return api;
}
  




module.exports = spotifyApiFactory;