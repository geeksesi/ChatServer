const mongoos = require('mongoose');


const messageSchema = mongoos.Schema({
    // _id: mongoos.Schema.Types.ObjectId,
    user_id: {
        type: mongoos.Schema.Types.ObjectId,
        require: true,
    },
    message: {
        type: String,
        require: true,
    },
    timestamp: {
        type: Number,
        require: true,
    },
});

const userSchema = mongoos.Schema({
    // _id: mongoos.Schema.Types.ObjectId,
    name: {
        type: String,
        require: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    profile: {
        type: String,
        require: true,
    },
    timestamp: {
        type: Number,
        require: true,
    },

});

const Message = mongoos.model("message", messageSchema);
const User = mongoos.model("user", userSchema);

module.exports = {
    Message: Message,
    User: User
};