import { js_unparse_format } from "./js_unparse_format.mjs";
import { error } from "./error.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { function_open } from "./function_open.mjs";
import { function_exists } from "./function_exists.mjs";
import { file_write } from "./file_write.mjs";
import { js_code_export_function_declare } from "./js_code_export_function_declare.mjs";
import { js_imports_fix } from "./js_imports_fix.mjs";
import { file_open } from "./file_open.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { list_map } from "./list_map.mjs";
import { js_code_import } from "./js_code_import.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join } from "./list_join.mjs";
import { newline } from "./newline.mjs";
import { js_parse } from "./js_parse.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function function_new_generic(
  function_name,
  args_string,
  body_string,
  open,
  imports,
  async_is,
  overwrite,
) {
  let contents_function = js_code_export_function_declare(
    function_name,
    args_string,
    body_string,
    async_is,
  );
  let mapped = list_map(imports, js_code_import);
  let concat = list_concat(mapped, [contents_function]);
  let contents = list_join(concat, newline());
  let ast = js_parse(contents);
  let write;
  if (overwrite) {
    write = file_overwrite;
  } else {
    if (await function_exists(function_name)) {
      await function_open(function_name);
      error(string_combine_multiple(["already exists: ", function_name]));
      return;
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
  return {
    contents,
  };
}
