import { string_prefix_without_try } from "./string_prefix_without_try.mjs";
import { sermon_path_suffix } from "./sermon_path_suffix.mjs";
import { sermon_folder } from "./sermon_folder.mjs";
import { string_without_surround } from "./string_without_surround.mjs";
export function sermon_path_to_name(path) {
  path = string_prefix_without_try(path, "./");
  return string_without_surround(path, sermon_folder(), sermon_path_suffix());
}
