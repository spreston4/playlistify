const User = require('./User');
const Playlist = require('./Playlist');
const Song = require('./Song');

// User.hasMany(Playlist, {
//   foreignKey: 'user',
//   onDelete: 'CASCADE'
// });

// Playlist.belongsTo(User, {
//   foreignKey: 'user'
// });

Playlist.hasMany(Song, {
  foreignKey: 'playlist_id'
});

Song.belongsTo(Playlist, {
  foriegnKey: 'playlist_id'
})

module.exports = { User, Playlist, Song };
