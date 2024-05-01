import {file_read} from "./file_read.mjs";
import admin from "firebase-admin";
export async function storage_upload(file_path) {
    await file_read();
    var serviceAccount = require("path/to/serviceAccountKey.json");
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        storageBucket: "gs://letJESUSbeexalted.appspot.com"
    });
    var bucket = admin.storage().bucket();
    bucket.upload("/Users/j.milanmethodius/Desktop/hapi screenshots/demoimage.jpeg");
}
