var express = require('express');
var middleware = require('./config/middleware.js');
var firebase = require('firebase');

var app = express();

//SET UP MIDDLEWARE + ROUTES
middleware(app, express);

var PORT = 3000;

app.listen(PORT);
console.log('Grocery List is LISTening on ' + PORT);

// Initialize Firebase
firebase.initializeApp({
  databaseURL: "https://project-3889533569816587013.firebaseio.com/",
  serviceAccount: "/Users/mario/desktop/code/GL/server/GLfirebaseKey.json"
});
// Initialize firebase db reference
var db = firebase.database();
var ref = db.ref("/");
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});
// var dbList = ref.child('grocerylist');
//console.log('dblist', ref);
// ref.set({list: [{item:'milk', 'date': 5}, {item:'eggs', 'date': 5}, {item:'cheese', 'date': 5}]})

ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});

module.exports.app = app;

module.exports.ref = ref;
// console.log(ref === module.exports.ref)
