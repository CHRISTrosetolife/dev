import { path_join } from "./path_join.mjs";
import { file_write } from "./file_write.mjs";
export async function sermon_new(name) {
  let file_name = string_concat(name, ".txt");
  let sermon_path = path_join(["./sermons/", file_name]);
  return sermon_path;
  await file_write(sermon_path);
}
