const mongo        = require('mongoose');
const db_module    = require('./module');
const passwordHash = require('password-hash');

function add_user(name, user_name, password, profile, cb)
{
    const add_user = new db_module.userModule({
        _id      : new mongo.Types.ObjectId(),
        name     : name,
        user_name: user_name,
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
    const add_message = new db_module.messageModule({
        _id      : new mongo.Types.ObjectId(),
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

