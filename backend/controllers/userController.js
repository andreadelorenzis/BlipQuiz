const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// @desc    Register new user
// @router  POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    // Check if user exists
    const userExists = await User.findOne({ _id: req.user.user_id });
    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    // Create the user
    const user = await User.create({
        _id: req.user.user_id,
        email: req.user.email
    });

    if (user) {
        res.status(201).json({
            _id: user.id,
            email: req.user.email
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
})

module.exports = {
    registerUser,
}