var mongoose = require('mongoose');

// Player Schema
var playerSchema = mongoose.Schema({
    "name": {
        type: String
    },
    "dateOfBirth": {
        type: String
    },    
    "birthplace": {
        type: String
    },   
    "height": {
        type: String
    },
    "weight": {
        type: String
    },
    "position": {
        type: String
    },
    "number": {
        type: String
    },
    "img": {
        type: String
    }
});


var Player = module.exports = mongoose.model('Player', playerSchema);

// Get All Players
module.exports.getPlayers = function(callback) {
    Player.find(callback);
}

// Get Forwards
module.exports.getForwards = function(callback) {
    Player.find({ position: ["Forward"]}, callback);
}

// Get Midfielders
module.exports.getMidfielders = function(callback) {
    Player.find({ position: ["Midfielder"]}, callback);
}

// Get Defenders
module.exports.getDefenders = function(callback) {
    Player.find({ position: ["Defender"]}, callback);
}

// Get Goalkeepers
module.exports.getGoalkeepers = function(callback) {
    Player.find({ position: ["Goalkeeper"]}, callback);
}


// Get Player By Name
module.exports.getPlayerByName = function(playerName, callback) {
    Player.find({ name: [playerName] }, callback);
}
