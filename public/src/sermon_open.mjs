import { file_open } from "./file_open.mjs";
import { written_path } from "./written_path.mjs";
export async function sermon_open(written_folder, name) {
  let path_file = written_path(written_folder, name);
  await file_open(path_file);
}
