import { object_property_exists_not } from "./object_property_exists_not.mjs";
import admin from "firebase-admin";
import { file_read_json } from "./file_read_json.mjs";
import { global_function_initialize } from "./global_function_initialize.mjs";
export async function storage_bucket() {
  let service_account = await file_read_json("../firebase.json");
  let g = global_function_initialize(storage_bucket, {});
  if (object_property_exists_not(g, "initialized")) {
    admin.initializeApp({
      credential: admin.credential.cert(service_account),
      storageBucket: "gs://letjesusbeexalted.appspot.com",
    });
  }
  let bucket = admin.storage().bucket();
  return bucket;
}
