import { js_imports_add_specified } from "./js_imports_add_specified.mjs";
import { file_js_unparse } from "./file_js_unparse.mjs";
import { file_js_parse } from "./file_js_parse.mjs";
import { js_identifier_rename } from "./js_identifier_rename.mjs";
import { js_import_remove_ast } from "./js_import_remove_ast.mjs";
import { data_identifiers } from "./data_identifiers.mjs";
import { data_update_multiple } from "./data_update_multiple.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { list_remove } from "./list_remove.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { each_async } from "./each_async.mjs";
export async function function_rename(fn_name_from, fn_name_to) {
  let identifiers = await data_identifiers();
  let fn_path_from = function_name_to_path(fn_name_from);
  let fn_path_to = function_name_to_path(fn_name_to);
  await function_rename(fn_path_from, fn_path_to);
  let existing = object_property_get(identifiers, fn_name_from);
  list_remove(existing, fn_name_to);
  await each_async(existing, async (e) => {
    let file_path = function_name_to_path(e);
    let ast = await file_js_parse(file_path);
    js_import_remove_ast(ast, fn_name_from);
    js_identifier_rename(ast, fn_name_from, fn_name_to);
    js_imports_add_specified(ast, [fn_name_to]);
    await file_js_unparse(file_path, ast);
  });
  await data_update_multiple(fps);
}
