const path = require('path');
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const { protect } = require('./middleware/authMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 5001;
const cors = require('cors');

connectDB();

const app = express();

app.use(cors({
    origin: '*'
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);

app.use('/api/decks', require('./routes/deckRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// Serve frontend 
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../frontend/build')));

//     app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')));
// } else {
//     app.get('/', (req, res) => res.send('Please, set to production'));
// }

app.listen(port, () => console.log("Server started on port " + port));