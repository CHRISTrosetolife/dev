import { file_read } from "./file_read.mjs";
import { sermon_path } from "./sermon_path.mjs";
import { string_split_newline } from "./string_split_newline.mjs";
export async function sermon_format(name) {
  let sermon_path_file = sermon_path(name);
  let text = await file_read(sermon_path_file);
  let lines = string_split_newline(text);
  return lines;
}
