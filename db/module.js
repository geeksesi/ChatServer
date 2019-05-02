const mongoos = require('mongoose');

const messageSchema = mongoos.Schema({
    _id      : mongoos.Schema.Types.ObjectId,
    user_id  : mongoos.Schema.Types.ObjectId,
    message  : String,
    timestamp: Number,
});

const userSchema = mongoos.Schema({
    _id      : mongoos.Schema.Types.ObjectId,
    name     : String,
    user_name: String,
    password : String,
    profile  : String,
    timestamp: Number,

});

// const messageModule = mongoos.model("message", messageSchema);
// const userModule    = mongoos.model("user", userSchema);

module.exports = {
    messageModule : mongoos.model("message", messageSchema),
    userModule    : mongoos.model("user", userSchema)
};
