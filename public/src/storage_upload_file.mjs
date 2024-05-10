import admin from "firebase-admin";
let service_account = await file_read_json("../firebase.json");
admin.initializeApp({
  credential: admin.credential.cert(service_account),
  storageBucket: "gs://letjesusbeexalted.appspot.com",
});
let bucket = admin.storage().bucket();
export async function storage_upload_file(file_path, destination) {
  await bucket.upload(file_path, {
    destination,
  });
}
