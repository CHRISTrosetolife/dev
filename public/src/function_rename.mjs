import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { assert_message } from "./assert_message.mjs";
import { object_properties_intersect } from "./object_properties_intersect.mjs";
import { fn_name } from "./fn_name.mjs";
import { functions_identifier } from "./functions_identifier.mjs";
import { functions_string } from "./functions_string.mjs";
import { function_paths } from "./function_paths.mjs";
import { js_import_remove } from "./js_import_remove.mjs";
import { data_remove } from "./data_remove.mjs";
import { data_update_multiple_transform } from "./data_update_multiple_transform.mjs";
import { data_transform } from "./data_transform.mjs";
import { function_transform_args_split_lambda } from "./function_transform_args_split_lambda.mjs";
import { js_imports_add_specified } from "./js_imports_add_specified.mjs";
import { file_js_unparse } from "./file_js_unparse.mjs";
import { file_js_parse } from "./file_js_parse.mjs";
import { js_identifier_rename } from "./js_identifier_rename.mjs";
import { file_rename } from "./file_rename.mjs";
import { data_identifiers } from "./data_identifiers.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { list_remove } from "./list_remove.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { each_async } from "./each_async.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_map } from "./list_map.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export async function function_rename(fn_name_from, fn_name_to) {
  assert_arguments_length(arguments, 2);
  let identifiers = await data_identifiers();
  let fn_path_from = function_name_to_path(fn_name_from);
  let fn_path_to = function_name_to_path(fn_name_to);
  let existing = object_property_get(identifiers, fn_name_from);
  list_remove(existing, fn_name_from);
  await file_rename(fn_path_from, fn_path_to);
  await function_transform_args_split_lambda(
    fn_name_to,
    [js_identifier_rename],
    [fn_name_from, fn_name_to],
  );
  await each_async(existing, async (e) => {
    let file_path = function_name_to_path(e);
    let ast = await file_js_parse(file_path);
    js_import_remove(ast, fn_name_from);
    js_identifier_rename(ast, fn_name_from, fn_name_to);
    js_imports_add_specified(ast, [fn_name_to]);
    await file_js_unparse(file_path, ast);
  });
  let functions_matching_strings = await functions_string(fn_name_from);
  let functions_fn_name = await functions_identifier(fn_name.name);
  let intersected = object_properties_intersect(
    functions_matching_strings,
    functions_fn_name,
  );
  assert_message(list_empty_is, [intersected], () =>
    string_combine_multiple([
      "if this assert fails, then this rename needs to handle ",
      fn_name.name,
      "",
    ]),
  );
  let concatenated = list_concat(existing, [fn_name_to]);
  let function_paths = list_map(concatenated, function_name_to_path);
  await data_transform(async function lambda(data) {
    data_remove(data, fn_name_from);
    await data_update_multiple_transform(function_paths, data);
  });
}
