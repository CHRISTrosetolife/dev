import { json_to } from "./json_to.mjs";
import { firebase_upload_string } from "./firebase_upload_string.mjs";
export async function firebase_upload_object(storage_path, o) {
  await firebase_upload_string(storage_path, json_to(o));
}
