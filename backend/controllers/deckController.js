const asyncHandler = require('express-async-handler');

// @desc    Get decks
// @router  GET /api/decks
// @access  Private
const getDecks = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get decks' });
})

// @desc    Create deck
// @router  POST /api/decks
// @access  Private
const createDeck = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error('Please add a text field');
    }

    res.status(200).json({ message: 'Create deck' });
})

// @desc    Update deck
// @router  PUT /api/decks/:id
// @access  Private
const updateDeck = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Update deck ' + req.params.id });
})

// @desc    Delete deck
// @router  DELETE /api/decks/:id
// @access  Private
const deleteDeck = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Delete deck ' + req.params.id });
})

module.exports = {
    getDecks,
    createDeck,
    updateDeck,
    deleteDeck
}