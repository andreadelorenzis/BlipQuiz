const asyncHandler = require('express-async-handler');
const Deck = require('../models/deckModel');
const User = require('../models/userModel');

// @desc    Get decks
// @router  GET /api/decks
// @access  Private
const getDecks = asyncHandler(async (req, res) => {
    const decks = await Deck.find({ user: req.user.user_id });
    res.status(200).json(decks);
})

// @desc    Create deck
// @router  POST /api/decks
// @access  Private
const createDeck = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error('Please add a text field');
    }

    const deck = await Deck.create({
        text: req.body.text,
        user: req.user.user_id
    });

    res.status(200).json(deck);
})

// @desc    Update deck
// @router  PUT /api/decks/:id
// @access  Private
const updateDeck = asyncHandler(async (req, res) => {
    const deck = await Deck.findById(req.params.id);

    if (!deck) {
        res.status(400);
        throw new Error('Deck not found.');
    }

    // Check for user
    const user = await User.findOne({ _id: req.user.user_id });
    if (!user) {
        res.status(401);
        throw new Error('User not found');
    }

    // Make sure the logged in user matches the deck user
    console.log(deck.user, user.id)
    if (deck.user !== user.id) {
        res.status(401);
        throw new Error('User not authorized');
    }

    const updatedDeck = await Deck.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).json(updatedDeck);
})

// @desc    Delete deck
// @router  DELETE /api/decks/:id
// @access  Private
const deleteDeck = asyncHandler(async (req, res) => {
    const deck = await Deck.findById(req.params.id);

    if (!deck) {
        res.status(400);
        throw new Error('Deck not found.');
    }

    // Check for user
    const user = await User.findOne({ _id: req.user.user_id });
    if (!user) {
        res.status(401);
        throw new Error('User not found');
    }

    // Make sure the logged in user matches the deck user
    console.log(deck.user, user.id)
    if (deck.user !== user.id) {
        res.status(401);
        throw new Error('User not authorized');
    }

    await deck.remove();

    res.status(200).json({ id: req.params.id });
})

module.exports = {
    getDecks,
    createDeck,
    updateDeck,
    deleteDeck
}