import { file_open } from "./file_open.mjs";
import { file_write } from "./file_write.mjs";
import { written_path } from "./written_path.mjs";
export async function written_new(written_folder, name) {
  let path_file = written_path(written_folder, name);
  await file_write(path_file, "TODO");
  await file_open(path_file);
}
