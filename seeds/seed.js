const sequelize = require('../config/connection');
const seedPlaylist = require('./playlistData.js');
const seedSong = require('./songData.js');

const seedAll = async () => {

  await sequelize.sync({ force: true });
  await seedPlaylist();
  await seedSong();

  process.exit(0);
};

seedAll();
