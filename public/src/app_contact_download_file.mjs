import { file_read_json } from "./file_read_json.mjs";
import { app_contact_respond } from "./app_contact_respond.mjs";
import { object_property_get } from "./object_property_get.mjs";
export async function app_contact_download_file(d, file_path) {
  let file = await file_read_json(file_path);
  let message = object_property_get(file, "message");
  let { output, outputs } = app_contact_respond(d, message);
  let output_null = output === null;
  let v = {
    file_path,
    message,
    output_null,
    output,
    outputs,
  };
  return v;
}
