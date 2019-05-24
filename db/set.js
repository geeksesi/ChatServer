const mongo           = require('mongoose');
const {Message, User} = require('./module');
const passwordHash    = require('password-hash');

function add_user(name, username, email, password, profile, cb)
{
    const add_user = new User({
        // _id      : new mongo.Types.ObjectId(),
        name     : name,
        username: username,
        email    : email,
        password : passwordHash.generate(password),
        profile  : profile,
        timestamp: Math.floor(Date.now() / 1000),
    
    });
    let resault = {};
    add_user.save((err, res) => {
        if (err) {resault.ok = false; resault.body = err;}
        else  {resault.ok = true; resault.body = res;}
        cb(resault);
    })

}

function add_message(user_id, message, cb)
{
    const add_message = new Message({
        // _id      : new mongo.Types.ObjectId(),
        user_id  : user_id,
        message  : message,
        timestamp: Math.floor(Date.now() / 1000),
    
    });
    let resault = {};
    add_message.save((err, res) => {
        if (err) {resault.ok = false; resault.body = err;}
        else  {resault.ok = true; resault.body = res;}
        cb(resault);
    })

}


module.exports = {add_user, add_message};

