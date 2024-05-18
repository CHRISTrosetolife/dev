import { string_combine } from "./string_combine.mjs";
import { file_name_json } from "./file_name_json.mjs";
export function yyy8Uu_storage_path(index) {
  let file_name = file_name_json(index);
  let destination = string_combine(`yyy8Uu/`, file_name);
  return destination;
}
