const app    = require('express')();
const http   = require('http').Server(app);
const io     = require('socket.io')(http);
const listen = require('./socket/io');


// Mongo DB
const mongo  = require('mongoose');
const db_set = require('./db/set');
const db_module = require('./db/module');

mongo.connect('mongodb://127.0.0.1:27017/chat', {useNewUrlParser: true});

// db_add_user = new DBADD();
// db_set.add_user("javad", "geeksesi", "javadkhof", "test", res => {console.log(res)});
// db_set.add_message("5cc8aae7fae56d27ae1c85cd", "hello world", res => {console.log(res)});



io.on('connection', socket => {
    listen(io, socket);
});


http.listen(3000, function () {
    console.log('listening on *:3000');
  });