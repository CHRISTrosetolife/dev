import { bible_storage_path_version } from "./bible_storage_path_version.mjs";
export function bible_engbsb_storage_path() {
  let version_code = "engbsb";
  return bible_storage_path_version(version_code);
}
