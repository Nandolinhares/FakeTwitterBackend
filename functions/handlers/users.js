const { db } = require('../utils/admin');
const firebase = require('firebase');

const firebaseConfig = require('../utils/config');

 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

//Get Tweets
exports.getTweets = (req, res) => {
    db.collection("tweets").get()
        .then(data => {
            let tweets = [];
            data.forEach(doc => {
                tweets.push(doc.data());
            })
            return res.status(200).json(tweets);
        })
}