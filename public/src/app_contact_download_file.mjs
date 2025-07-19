import { object_property_exists } from "./object_property_exists.mjs";
import { object_merge_strict } from "./object_merge_strict.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { app_contact_respond } from "./app_contact_respond.mjs";
import { object_property_get } from "./object_property_get.mjs";
export async function app_contact_download_file(d, file_path) {
  let file = await file_read_json(file_path);
  let message;
  if (object_property_exists(file, "encrypted")) {
    message = object_property_get(file, "encrypted");
  }$el
  message = object_property_get(file, "message");
  let r = app_contact_respond(d, message);
  let output = object_property_get(r, "output");
  let output_null = output === null;
  object_merge_strict(r, {
    file_path,
    message,
    output_null,
  });
  return r;
}
