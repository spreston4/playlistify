const User = require('./User');
const Playlist = require('./Playlist');
const Songs = require('./Songs');

User.hasMany(Playlist, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Playlist.belongsTo(User, {
  foreignKey: 'user_id'
});

Playlist.hasMany(Songs, {
  foreignKey: 'playlist_id'
});

Songs.belongsTo(Playlist, {
  foriegnKey: 'playlist_id'
})

module.exports = { User, Playlist, Songs };
