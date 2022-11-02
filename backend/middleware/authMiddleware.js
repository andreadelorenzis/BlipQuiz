const admin = require('../config/firebaseConfig');
const asyncHandler = require('express-async-handler');

const protect = asyncHandler(async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decodeValue = await admin.auth().verifyIdToken(token);

            if (decodeValue) {
                req.user = decodeValue;
                return next();
            }
            return res.json({ message: 'Unauthorized' });
        } catch (error) {
            res.status(401);
            throw new Error('Not authorized');
        }
    }

    if (!token) {
        res.status(401);
        throw new Error('Not authorized, no token')
    }
});

module.exports = { protect };