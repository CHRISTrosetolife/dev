import { file_extension_json } from "./file_extension_json.mjs";
import { string_combine } from "./string_combine.mjs";
export function file_name_json(name) {
  let v = string_combine(name, file_extension_json());
  return v;
}
