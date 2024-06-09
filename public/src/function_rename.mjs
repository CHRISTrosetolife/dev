import { file_rename } from "./file_rename.mjs";
import { function_transform_args_split_lambda } from "./function_transform_args_split_lambda.mjs";
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
  await file_rename(fn_path_from, fn_path_to);
  let existing = object_property_get(identifiers, fn_name_from);
  list_remove(existing, fn_name_to);
  await each_async(existing, async (e) => {
    await function_transform_args_split_lambda(
      e,
      [js_import_remove_ast],
      [fn_name_from],
    );
  });
  await data_update_multiple(fps);
  js_import_remove_ast;
}
