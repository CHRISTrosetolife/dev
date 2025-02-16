import { app_code_batch_name_when } from "./app_code_batch_name_when.mjs";
import { date_string_iso_file } from "./date_string_iso_file.mjs";
export async function app_code_batch_name() {
  let when = date_string_iso_file();
  let path = await app_code_batch_name_when(when);
  return path;
}
