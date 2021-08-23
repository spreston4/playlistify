const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Song extends Model {}

Song.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // songs have a playlist_id to connect to specific playlists.
    playlist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
         model: "playlist",
         key: 'playlist_id',
      },
    },
    // URI allows us to put tracks into a playlist. Basically Playlists have their own serial code that accepts URI only
    URI: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    artist: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    danceability: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    bpm: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'song',
  }
);

module.exports = Song;
