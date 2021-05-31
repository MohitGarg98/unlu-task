const mongoose = require('mongoose');

const ticketIdSchema = new mongoose.Schema({
    gameId: String,
    userName: String
});

module.exports = new mongoose.model('TicketId', ticketIdSchema);