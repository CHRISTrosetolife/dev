import { bible_storage_path_file_version } from "./bible_storage_path_file_version.mjs";
export function bible_engbsb_storage_path_file(key) {
  let version_code = "engbsb";
  return bible_storage_path_file_version(key, version_code);
}
