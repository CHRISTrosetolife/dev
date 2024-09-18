import { file_open } from "./file_open.mjs";
import { unawait } from "./unawait.mjs";
export function file_open_unawait(file_path) {
  unawait(async () => await file_open(file_path));
}
