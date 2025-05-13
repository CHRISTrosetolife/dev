import { folder_gitignore_path_function_json } from "./folder_gitignore_path_function_json.mjs";
import { file_delete_if_exists } from "./file_delete_if_exists.mjs";
import { uuid } from "./uuid.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export async function uuid_file(fn, lambda) {
  assert_arguments_length(arguments, 2);
  let u = await uuid();
  let file_path = folder_gitignore_path_function_json(u, fn);
  try {
    let v = await lambda(file_path);
    return v;
  } finally {
    await file_delete_if_exists(file_path);
  }
}
