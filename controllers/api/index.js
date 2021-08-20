const router = require('express').Router();
const userRoutes = require('./userRoutes');
const spotifyRoutes = require('./spotifyRoutes');
const playlistRoutes = require('./playlistRoutes');
const songRoutes = require('./songRoutes');

router.use('/users', userRoutes);
router.use('/spotify', spotifyRoutes);
router.use('/playlist', playlistRoutes);
router.use('/song', songRoutes);


module.exports = router;
