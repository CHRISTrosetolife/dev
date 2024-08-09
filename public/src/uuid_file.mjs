import { folder_gitignore_path_function } from "./folder_gitignore_path_function.mjs";
import { file_delete_if_exists } from "./file_delete_if_exists.mjs";
import { file_name_json } from "./file_name_json.mjs";
import { uuid } from "./uuid.mjs";
export async function uuid_file(fn, lambda) {
  let u = await uuid();
  let file_name = file_name_json(u);
  let file_path = folder_gitignore_path_function(fn, file_name);
  try {
    await lambda(file_name);
  } finally {
    await file_delete_if_exists(file_name);
  }
}
