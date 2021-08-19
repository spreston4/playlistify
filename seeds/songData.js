const { Song } = require('../models');

const songData = [
    {
        playlist_id: 1,
        URI: 'test',
        name: 'Song 1',
        artist: 'Artist 1',
    },
    {
        playlist_id: 1,
        URI: 'test',
        name: 'Song 2',
        artist: 'Artist 1',
    },
    {
        playlist_id: 1,
        URI: 'test',
        name: 'Song 3',
        artist: 'Artist 1',
    },
    {
        playlist_id: 2,
        URI: 'test',
        name: 'Song 4',
        artist: 'Artist 2',
    },
    {
        playlist_id: 2,
        URI: 'test',
        name: 'Song 5',
        artist: 'Artist 2',
    },
    {
        playlist_id: 2,
        URI: 'test',
        name: 'Song 6',
        artist: 'Artist 3',
    },
];

const seedSong = () => Song.bulkCreate(songData);

module.exports = seedSong;