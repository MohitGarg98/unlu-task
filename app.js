var express = require('express');
const mongoose = require('mongoose');

var app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/gamedb", {useNewUrlParser: true});

app.use('/', require('./routes'));

app.listen(8000, function (err) {
    if(err){console.log(err); return}
    else{
        console.log('Server runnning on port 8000');
    }
})