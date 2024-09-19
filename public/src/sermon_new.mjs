import { file_open } from "./file_open.mjs";
import { string_combine } from "./string_combine.mjs";
import { path_join } from "./path_join.mjs";
import { file_write } from "./file_write.mjs";
export async function sermon_new(name) {
  let file_name = string_combine(name, ".txt");
  let sermon_path_file = path_join(["./sermons/", file_name]);
  await file_write(sermon_path_file, "TODO");
  await file_open(sermon_path_file);
}
