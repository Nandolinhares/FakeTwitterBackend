var admin = require("firebase-admin");

var serviceAccount = require("../twitterteste-6df07-firebase-adminsdk-wbhen-fd32536d3a.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://twitterteste-6df07.firebaseio.com"
});

const db = admin.firestore();

module.exports = { admin, db }
