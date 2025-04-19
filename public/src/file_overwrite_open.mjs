import { file_open } from "./file_open.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function file_overwrite_open(output_path, text) {
  await file_overwrite(output_path, text);
  await file_open(output_path);
}
