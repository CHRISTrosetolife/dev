import { folder_gitignore_path } from "./folder_gitignore_path.mjs";
import { function_run } from "./function_run.mjs";
export async function function_output_file(function_name) {
  let result = await function_run(function_name, []);
  let output_pat = folder_gitignore_path();
}
