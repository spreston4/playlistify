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
    {
        name: 'Pam playlist',
        description: 'should not see this on the djbooth page for sam.',
        user: 'pam',
    },
];

const seedPlaylist = () => Playlist.bulkCreate(playlistData);

module.exports = seedPlaylist;