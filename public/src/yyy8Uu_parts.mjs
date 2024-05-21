import { yyy8Uu_file_path_to_parts } from "./yyy8Uu_file_path_to_parts.mjs";
import { yyy8Uu_file_paths } from "./yyy8Uu_file_paths.mjs";
export async function yyy8Uu_parts(index) {
  let filtered = await yyy8Uu_file_paths();
  let result = await yyy8Uu_file_path_to_parts(filtered, index);
  return result;
}
