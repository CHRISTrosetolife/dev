import { log } from "./log.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { folder_gitignore_path } from "./folder_gitignore_path.mjs";
import { storage_upload_object } from "./storage_upload_object.mjs";
import { file_exists } from "./file_exists.mjs";
export async function storage_upload_object_gitignore(
  storage_path,
  result_new,
) {
  let existing_path = folder_gitignore_path(storage_path);
  if (await file_exists(existing_path)) {
  }
  await storage_upload_object(result_new, storage_path);
  await file_overwrite_json(existing_path, result_new);
  log({
    existing_path,
  });
  return existing_path;
}
