const router = require('express').Router();
const { Playlist, Song } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all playlists created by the currently logged in user
// router.get('/', async (req, res) => {

//     try {
//         const playlistData = await Playlist.findAll({
//             where: { user = req.session.user},
//             include: [{ model: Song }],
//         });
//     }
// });