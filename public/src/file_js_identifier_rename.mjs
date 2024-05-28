import { js_identifier_rename } from "./js_identifier_rename.mjs";
import { file_js_transform } from "./file_js_transform.mjs";
export async function file_js_identifier_rename(
  file_path,
  identifier_from,
  identifier_to,
) {
  let lambda = js_identifier_rename;
  await file_js_transform([lambda], file_path, [identifier_from, identifier_to]);
}
