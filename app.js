const mongo     = require('mongoose');
const io        = require('socket.io');
const db_set    = require('./db/set');
const db_get    = require('./db/get');


mongo.connect('mongodb://127.0.0.1:27017/chat', {useNewUrlParser: true});

// db_add_user = new DBADD();
// db_set.add_user("javad", "geeksesi", "javadkhof", "test", res => {console.log(res)});
// db_set.add_message("5cc8aae7fae56d27ae1c85cd", "hello world", res => {console.log(res)});

