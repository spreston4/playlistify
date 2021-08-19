const sequelize = require('../config/connection');
const playlistData = require('./playlistData.js');
const songData = require('./songData.js');

const seedAll = async () => {

  await sequelize.sync({ force: true });
  await seedPlaylist();
  await seedSong();

  process.exit(0);
};

seedAll();
