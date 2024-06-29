import { file_name_json } from "./file_name_json.mjs";
import { bible_engbsb_storage_path } from "./bible_engbsb_storage_path.mjs";
import { string_combine } from "./string_combine.mjs";
export function bible_engbsb_storage_path_file(key) {
  let file_name = file_name_json(key);
  return string_combine(bible_engbsb_storage_path(), file_name);
}
