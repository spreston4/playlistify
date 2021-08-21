const router = require('express').Router();
const { Playlist, Song } = require('../../models');
const withAuth = require('../../utils/auth');

// Create a new playlist. Called from 'newPlaylist.js' which is called by clicking the 'Create New Playlist' on the djbooth page.
router.post('/', async (req, res) => {

    try {
        const playlistData = Playlist.create({
            name: req.body.name,
            description: req.body.description,
            user: 'sam',             // 'sam' for testing purposes only. replace with 'req.session.user' 
        });

        res.status(200).json(playlistData);

    } catch (err) {
        res.status(400).json(err);
    }
});

// Delete a playlist. Called from 'deletePlaylist.js' which is called by clicking the 'Delete Playlist Button' on the viewplaylist page.
router.delete('/:id', async (req, res) => {

    try {
        const playlistData = await Playlist.destroy({
            where: {
                user: 'sam',             // 'sam' for testing purposes only. replace with 'req.session.user' 
                id: req.params.id,
            },
        });

        if (!playlistData) {
            res.status(404).json({ message: 'No playlist found with that id!' });
            return;
        }

        res.status(200).json(playlistData);

    } catch (err) {
        res.status(500).json(err);
    }
});

// Edit a playlist name and description. Called from 'editPlaylist.js' which is called by clicking the 'Update Playlist Button' on the editplaylist page.
router.put('/:id', async (req, res) => {

    try {
        const playlistData = await Playlist.update(
            {
                name: req.body.name,
                description: req.body.description,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );

        if (!playlistData) {
            res.status(404).json({ message: 'No playlist found with that id!' });
            return;
        }

        res.status(200).json(playlistData);

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;