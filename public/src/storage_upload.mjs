import {file_read_json} from "./file_read_json.mjs";
import admin from "firebase-admin";
export async function storage_upload(file_path) {
    let service_account = await file_read_json('../firebase.json');
    admin.initializeApp({
        credential: admin.credential.cert(service_account),
        storageBucket: "gs://letJESUSbeexalted.appspot.com"
    });
    let bucket = admin.storage().bucket();
    bucket.upload(file_path);
}
