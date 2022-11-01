const mongoose = require('mongoose');

const deckSchema = mongoose.Schema({
    user: {
        type: String,
        required: true,
        ref: 'User'
    },
    text: {
        type: String,
        required: [true, 'Please add some text.']
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Deck', deckSchema);