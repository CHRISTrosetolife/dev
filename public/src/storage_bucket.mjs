import admin from "firebase-admin";
import { file_read_json } from "./file_read_json.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { error } from "./error.mjs";
export async function storage_bucket(file_path, destination) {
  if (string_starts_with(destination, "/")) {
    error();
  }
  let service_account = await file_read_json("../firebase.json");
  admin.initializeApp({
    credential: admin.credential.cert(service_account),
    storageBucket: "gs://letjesusbeexalted.appspot.com",
  });
  let bucket = admin.storage().bucket();
  await bucket.upload(file_path, {
    destination,
  });
}
