import { folder_gitignore_path_function } from "./folder_gitignore_path_function.mjs";
import { file_delete_if_exists } from "./file_delete_if_exists.mjs";
import { file_name_json } from "./file_name_json.mjs";
import { uuid } from "./uuid.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export async function uuid_file(fn, lambda) {
  assert_arguments_length(arguments, 2);
  let u = await uuid();
  let file_name = file_name_json(u);
  let file_path = folder_gitignore_path_function(fn, file_name);
  try {
    let v = await lambda(file_path);
    return v;
  } finally {
    await file_delete_if_exists(file_path);
  }
}
