import { yyy8Uu_file_paths } from "./yyy8Uu_file_paths.mjs";
import { yyy8Uu_file_path_to_parts } from "./yyy8Uu_file_path_to_parts.mjs";
export async function sandbox() {
  let index = 0;
  let filtered = await yyy8Uu_file_paths();
  return await yyy8Uu_file_path_to_parts(filtered, index);
}
