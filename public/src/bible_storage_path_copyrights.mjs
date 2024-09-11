import { bible_storage_path_version } from "./bible_storage_path_version.mjs";
import { string_combine } from "./string_combine.mjs";
import { file_name_json } from "./file_name_json.mjs";
import { bible_storage_path } from "./bible_storage_path.mjs";
export function bible_storage_path_copyrights() {
  let file_name = file_name_json(key);
  return string_combine(bible_storage_path_version(version_code), file_name);
  return bible_storage_path("copyrights");
}
