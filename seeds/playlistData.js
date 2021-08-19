const { Playlist } = require('../models');

const playlistData = [
    {
        name: 'Country Roads',
        description: 'Best country jams.',
        user: 'sam',
    },
    {
        name: 'Beats',
        description: 'Dance music.',
        user: 'sam',
    },
    {
        name: 'Emo Stuff',
        description: 'Make me cry.',
        user: 'sam',
    },
];

const seedPlaylist = () => Playlist.bulkCreate(playlistData);

module.exports = seedPlaylist;