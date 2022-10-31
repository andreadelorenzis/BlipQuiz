const express = require('express');
const router = express.Router();
const {
    getDecks,
    createDeck,
    updateDeck,
    deleteDeck
} = require('../controllers/deckController');

router.route('/').get(getDecks).post(createDeck);
router.route('/:id').put(updateDeck).delete(deleteDeck);

module.exports = router;