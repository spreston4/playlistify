const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

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



// Use withAuth middleware to prevent access to route
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Project }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/login', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect('/profile');
//     return;
//   }

//   res.render('login');
// });

// Render route for searchtracks page
// router.get('/searchtracks', withAuth, (req, res) => {

//   try {
//     res.render('searchtracks', {
//       logged_in: req.session.logged_in,
//       user_id: req.session.user_id
//     });

//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
