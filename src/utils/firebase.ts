// Requiring firebase (as our db)
const firebase = require("firebase");
// Importing our configuration to initialize our app
const config = require("./firebaseConfig");
// Creates and initializes a Firebase app instance. Pass options as param
const db = firebase.initializeApp(config.firebaseConfig);

export default db;
