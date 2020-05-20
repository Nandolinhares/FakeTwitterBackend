const functions = require('firebase-functions');
const express = require('express');
const app = express();

//User
const { getTweets } = require('./handlers/users');

//User routes
app.get('/tweets', getTweets);

exports.api = functions.region("us-east1").https.onRequest(app);