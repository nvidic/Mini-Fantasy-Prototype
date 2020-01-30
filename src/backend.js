var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Import Players Module
Player = require('../models/players');

// Connect to mongoose
mongoose.connect('mongodb://localhost/chelsea');
var db = mongoose.connection;

// Setting route
app.get('/', function(req, res) {
    res.send('Please use /api/players or /api/schedules or /api/formation');
});

app.get('/api/players', function(req, res) {
    Player.getPlayers(function(err, players) {
        if(err) {
            throw(err);
        }
        res.json(players);
    });
});

app.get('/api/players/forwards', function(req, res) {
    Player.getForwards(function(err, players) {
        if(err) {
            throw(err);
        }
        res.json(players);
    });
});

app.get('/api/players/midfielders', function(req, res) {
    Player.getMidfielders(function(err, players) {
        if(err) {
            throw(err);
        }
        res.json(players);
    });
});

app.get('/api/players/defenders', function(req, res) {
    Player.getDefenders(function(err, players) {
        if(err) {
            throw(err);
        }
        res.json(players);
    });
});

app.get('/api/players/goalkeepers', function(req, res) {
    Player.getGoalkeepers(function(err, players) {
        if(err) {
            throw(err);
        }
        res.json(players);
    });
});


app.get('/api/players/:playerName', function(req, res) {
    //let playerName = "Mateo Kovacic";
    // Mateo_Kovacic
    let playerNameArray = req.params.playerName.split('_');
    
    let playerName = playerNameArray.join(' ');
    Player.getPlayerByName(playerName, function(err, players) {
        if(err) {
            throw(err);
        }
        res.json(players);
    });
});


app.listen(3000);
console.log('Running on port 3000');

