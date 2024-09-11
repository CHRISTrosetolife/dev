import { string_combine } from "./string_combine.mjs";
import { file_name_json } from "./file_name_json.mjs";
import { bible_storage_path } from "./bible_storage_path.mjs";
export function bible_storage_path_copyrights() {
  let file_name = file_name_json("copyrights");
  return string_combine(bible_storage_path(), file_name);
}
