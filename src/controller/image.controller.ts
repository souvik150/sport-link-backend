import firebase from "../utils/firebase";
require("firebase/storage"); // must be required for this to work
const storage = firebase.storage().ref(); // create a reference to storage
global.XMLHttpRequest = require("xhr2"); // must be used to avoid bug

const addImage = async (req: any, res: any) => {
  try {
    // Grab the file
    const file = req.file;
    // Format the filename
    const timestamp = Date.now();
    const name = file.originalname.split(".")[0];
    const type = file.originalname.split(".")[1];
    const fileName = `${name}_${timestamp}.${type}`;

    const imageRef = storage.child(fileName);

    const snapshot = await imageRef.put(file.buffer);

    const downloadURL = await snapshot.ref.getDownloadURL();

    res.send(downloadURL);
  } catch (error: any) {
    console.log(error);
    res.status(400).send(error.message);
  }
};
module.exports = {
  addImage,
};
