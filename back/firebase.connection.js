const firebaseConfig = require("./firebase.config");
const { credential } = require("firebase-admin");
const { initializeApp } = require("firebase-admin/app");
const { getStorage } = require("firebase-admin/storage");

const firebaseApp = initializeApp({
    credential: credential.cert(firebaseConfig),
    storageBucket: 'gs://e-courtage.appspot.com'
});
const bucket = getStorage(firebaseApp).bucket();

module.exports = {
    app: firebaseApp,
    bucket: bucket
}

