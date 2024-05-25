import { file_delete } from "./file_delete.mjs";
import { file_exists } from "./file_exists.mjs";
export async function file_delete_if_exists(output_path) {
  if (await file_exists(output_path)) {
    await file_delete(output_path);
  }
}
