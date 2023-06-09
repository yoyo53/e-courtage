const firebaseConfig = require("./firebase_credentials.json");
const { credential } = require('firebase-admin');
const { initializeApp } = require('firebase-admin/app');
const { getStorage } = require("firebase-admin/storage");

const firebaseApp = initializeApp({
    credential: credential.cert(firebaseConfig),
    storageBucket: 'gs://e-courtage.appspot.com'
});

const storage = getStorage(firebaseApp).bucket();

module.exports = {
    storage: storage
}