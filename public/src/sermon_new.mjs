import { written_path } from "./written_path.mjs";
import { sermon_folder } from "./sermon_folder.mjs";
import { file_open } from "./file_open.mjs";
import { file_write } from "./file_write.mjs";
export async function sermon_new(name) {
  let written_folder = sermon_folder();
  let path_file = written_path(written_folder, name);
  await file_write(path_file, "TODO");
  await file_open(path_file);
}
