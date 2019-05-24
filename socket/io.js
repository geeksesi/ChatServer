/**
 * must listen 
 * 
 * 
 * 
 */

const db_set = require('./../db/set');
const {Message, User} = require('./../db/module');
const passwordHash    = require('password-hash');

module.exports = function listen(io, socket)
{
    console.log("helllo");

    socket.join('not_auth');

    socket.on('register', (name, username, email, password, cb) => {
        db_set.add_user(name, username, email, password, "test", res => {
            console.log(res)
            if(res.ok == true)
            {
                cb(true);
            }
            else
            {
                cb(false);
            }
        });

    });

    socket.on("login", (username, password, cb) => {
        User.findOne({username : username}, (err, user) => {
            if(user == null)
            {
                cb(false);
                return false;
            }
            // console.log(user);
            if(passwordHash.verify(password, user.password))
            {
                socket.join('auth');
                cb(true);
            }
            else{
                cb(false);
            }
        });
    })

    socket.on("message", message => {
        // console.log(message);
        Message.find().then(res => {
            // console.log(res);
        });
        io.emit('new_message', "it's a fucking message");
    });
}