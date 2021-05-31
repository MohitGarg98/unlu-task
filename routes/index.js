var express = require('express');
var router = express();
const CreateGameId = require('../models/create_game');
const CreateTicketId = require('../models/create_ticket');

router.post('/api/game/create', function(req, res){
    const gameId = new CreateGameId({
        gameId: req.body.gameId
    })
    CreateGameId.findOne(req.body, function(err, game){
        if(err){
            console.log('err', err);
        } else {
            if(game){
                return res.send({
                    message: 'Game id already exists'
                })
            } else {
                gameId.save(function(err, game){
                    if(err){
                        console.log('err', err);
                    } else {
                        res.send({
                            message: 'Game Id created successfully'
                        })
                    }
                })
            }
        }
    })
})

router.post('/api/game/game_id/ticket/user_name/generate', function(req, res){
    const ticketId = new CreateTicketId({
        gameId: req.body.gameId,
        userName: req.body.userName
    })
    CreateTicketId.findOne(req.body, function(err, ticket){
        if(err){
            console.log('err', err);
        } else {
            if(ticket){
                return res.send({
                    message: 'ticket id already exists'
                })
            } else {
                CreateGameId.findOne({gameId: req.body.gameId}, function(err, game){
                    if(err){
                        console.log('err', err);
                    } else {
                        if(game){
                            ticketId.save(function(err, ticket){
                                if(err){
                                    console.log('err', err);
                                } else {
                                    res.send({
                                        message: 'ticket Id created successfully'
                                    })
                                }
                            })
                        } else {
                            res.send({
                                message: 'Game Id not exists'
                            })
                        }
                    }
                })
            }
        }
    })
})


module.exports = router;
