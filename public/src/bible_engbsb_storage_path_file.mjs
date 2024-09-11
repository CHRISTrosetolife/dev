import { bible_storage_path_version } from "./bible_storage_path_version.mjs";
import { file_name_json } from "./file_name_json.mjs";
import { string_combine } from "./string_combine.mjs";
export function bible_engbsb_storage_path_file(key) {
  let version_code = "engbsb";
  let file_name = file_name_json(key);
  return string_combine(bible_storage_path_version(version_code), file_name);
}
