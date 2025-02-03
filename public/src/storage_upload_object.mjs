import { storage_upload_object_force } from "./storage_upload_object_force.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { equal_json } from "./equal_json.mjs";
import { log } from "./log.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { folder_gitignore_path } from "./folder_gitignore_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
export async function storage_upload_object(storage_path, result_new) {
  let existing_path = folder_gitignore_path(storage_path);
  if (await file_exists(existing_path)) {
    let result_existing = await file_read_json(existing_path);
    if (equal_json(result_existing, result_new)) {
      if (false) {
        log(string_combine_multiple(["same; not uploading: ", existing_path]));
      }
      return;
    }
  }
  log(string_combine_multiple(["uploading: ", existing_path]));
  await storage_upload_object_force(result_new, storage_path);
  await file_overwrite_json(existing_path, result_new);
  return existing_path;
}
