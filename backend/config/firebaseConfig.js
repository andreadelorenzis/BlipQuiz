
const admin = require("firebase-admin");

let URL;

if (process.env.NODE_ENV === 'production') {
    URL = '/etc/secrets/serviceAccount.json';
} else {
    URL = './serviceAccount.json'
}

const serviceAccount = require(URL);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;