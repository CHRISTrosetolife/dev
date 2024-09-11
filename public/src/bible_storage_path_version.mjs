import { bible_storage_path } from "./bible_storage_path.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function bible_storage_path_version(version_code) {
  return string_combine_multiple([bible_storage_path(), version_code, "/"]);
}
