import { path_drive } from "./path_drive.mjs";
import { path_join } from "./path_join.mjs";
export function folder_external_root(folder) {
  let drive_letter = "D";
  let v = path_join([path_drive(drive_letter), folder]);
  return v;
}
