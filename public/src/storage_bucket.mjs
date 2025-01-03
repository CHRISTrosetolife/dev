import { file_read_json_previous } from "./file_read_json_previous.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { global_function_initialize } from "./global_function_initialize.mjs";
import { import_node } from "./import_node.mjs";
export async function storage_bucket() {
  let { default: admin } = await import_node("firebase-admin");
  let previous_name = "firebase";
  let service_account = await file_read_json_previous(previous_name);
  let g = global_function_initialize(storage_bucket, () => ({
    initialized: false,
  }));
  if (object_property_get(g, "initialized") !== true) {
    admin.initializeApp({
      credential: admin.credential.cert(service_account),
      storageBucket: "gs://letjesusbeexalted.appspot.com",
    });
    object_property_set(g, "initialized", true);
  }
  let bucket = admin.storage().bucket();
  return bucket;
}
