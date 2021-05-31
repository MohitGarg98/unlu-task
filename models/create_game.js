const mongoose = require('mongoose');

const gameIdSchema = new mongoose.Schema({
    gameId: String
});

module.exports = new mongoose.model('GameId', gameIdSchema);