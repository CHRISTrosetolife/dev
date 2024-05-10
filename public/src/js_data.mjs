import { file_exists } from "./file_exists.mjs";
import { js_identifiers } from "./js_identifiers.mjs";
export function js_data(ast) {
  return js_identifiers(ast);
  let data_path = "data.json";
  if (!file_exists(data_path)) {
  }
}
