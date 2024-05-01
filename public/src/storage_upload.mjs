export function storage_upload(file_path) {
    var admin = require("firebase-admin");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "gs://learnfirebase-39b36.appspot.com"
});

var bucket = admin.storage().bucket();

bucket.upload("/Users/j.milanmethodius/Desktop/hapi screenshots/demoimage.jpeg")
}
