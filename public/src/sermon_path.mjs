import { written_path } from "./written_path.mjs";
import { sermon_folder } from "./sermon_folder.mjs";
export function sermon_path(id) {
  let written_folder = sermon_folder();
  return written_path(written_folder, id);
}
