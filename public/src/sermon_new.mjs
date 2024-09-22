import { sermon_path } from "./sermon_path.mjs";
import { file_open } from "./file_open.mjs";
import { file_write } from "./file_write.mjs";
export async function sermon_new(name) {
  $ex;
  let sermon_path_file = sermon_path(name);
  await file_write(sermon_path_file, "TODO");
  await file_open(sermon_path_file);
}
