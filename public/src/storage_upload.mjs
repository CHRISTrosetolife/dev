import admin from "firebase-admin";
export function storage_upload(file_path) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        storageBucket: "gs://letJESUSbeexalted.appspot.com"
    });

    var bucket = admin.storage().bucket();

    bucket.upload("/Users/j.milanmethodius/Desktop/hapi screenshots/demoimage.jpeg")
    }
