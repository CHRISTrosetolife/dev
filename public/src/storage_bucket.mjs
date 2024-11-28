import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { global_function_initialize } from "./global_function_initialize.mjs";
import { import_node } from "./import_node.mjs";
let previous_name = "firebase";
export async function storage_bucket() {
  let { default: admin } = await import_node("firebase-admin");
  let service_account = await file_read_json(
    string_combine_multiple(["../", previous_name, ".json"]),
  );
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
