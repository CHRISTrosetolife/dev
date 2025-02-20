import { file_open } from "./file_open.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { js_unparse_format } from "./js_unparse_format.mjs";
import { js_imports_fix } from "./js_imports_fix.mjs";
import { file_write } from "./file_write.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { error } from "./error.mjs";
import { function_open } from "./function_open.mjs";
import { function_exists } from "./function_exists.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function function_new_generic_ast(
  function_name,
  overwrite,
  ast,
  open,
  contents,
) {
  let write;
  if (overwrite) {
    write = file_overwrite;
  } else {
    if (await function_exists(function_name)) {
      await function_open(function_name);
      error(string_combine_multiple(["already exists: ", function_name]));
    }
    write = file_write;
  }
  await js_imports_fix(ast);
  let unparsed = await js_unparse_format(ast);
  let file_path = function_name_to_path(function_name);
  await write(file_path, unparsed);
  if (open) {
    await file_open(file_path);
  }
  let v = {
    contents,
  };
  return v;
}
