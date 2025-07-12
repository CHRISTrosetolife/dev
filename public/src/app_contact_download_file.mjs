import { app_contact_respond } from "./app_contact_respond.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function app_contact_download_file(file, d, file_path) {
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
