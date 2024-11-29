import { function_dependencies_string } from "./function_dependencies_string.mjs";
import { fn_name } from "./fn_name.mjs";
import { file_overwrite_gitignore } from "./file_overwrite_gitignore.mjs";
export async function function_dependencies(function_name) {
  let text = await function_dependencies_string(function_name);
  await file_overwrite_gitignore(
    function_name,
    fn_name("function_dependencies"),
    text,
  );
}
