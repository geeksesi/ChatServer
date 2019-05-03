const app    = require('express')();
const http   = require('http').Server(app);
const mongo  = require('mongoose');
const io     = require('socket.io')(http);
const db_set = require('./db/set');
const db_get = require('./db/module');


mongo.connect('mongodb://127.0.0.1:27017/chat', {useNewUrlParser: true});

// db_add_user = new DBADD();
// db_set.add_user("javad", "geeksesi", "javadkhof", "test", res => {console.log(res)});
// db_set.add_message("5cc8aae7fae56d27ae1c85cd", "hello world", res => {console.log(res)});

io.on('connection', socket => {
    console.log("hellow");
});


http.listen(3000, function () {
    console.log('listening on *:3000');
  });