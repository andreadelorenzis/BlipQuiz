const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: String,
    email: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);