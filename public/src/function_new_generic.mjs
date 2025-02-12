import { file_write } from "./file_write.mjs";
import { js_code_export_function_declare } from "./js_code_export_function_declare.mjs";
import { js_code_format } from "./js_code_format.mjs";
import { js_imports_fix } from "./js_imports_fix.mjs";
import { file_open } from "./file_open.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { list_map } from "./list_map.mjs";
import { js_code_import } from "./js_code_import.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join } from "./list_join.mjs";
import { newline } from "./newline.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_unparse } from "./js_unparse.mjs";
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
  let parsed = js_parse(contents);
  await js_imports_fix(parsed);
  let unparsed = js_unparse(parsed);
  unparsed = await js_code_format(unparsed);
  let file_path = function_name_to_path(function_name);
  if (overwrite) {
    let write = file_overwrite;
  } else {
    let write = file_write;
  }
  await overwrite(file_path, unparsed);
  if (open) {
    await file_open(file_path);
  }
}
