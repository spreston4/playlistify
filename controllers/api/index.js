const router = require('express').Router();
const userRoutes = require('./userRoutes');
const spotifyRoutes = require('./spotifyRoutes');
const playlistRoutes = require('./playlistRoutes');

router.use('/users', userRoutes);
router.use('/spotify', spotifyRoutes);
// router.use('/playlist', playlistRoutes);

module.exports = router;
