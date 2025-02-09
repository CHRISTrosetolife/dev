import { global_function_initialize } from "./global_function_initialize.mjs";
import { functions_paths } from "./functions_paths.mjs";
import { function_rename_fn_name } from "./function_rename_fn_name.mjs";
import { functions_transform } from "./functions_transform.mjs";
import { js_import_remove_try } from "./js_import_remove_try.mjs";
import { log } from "./log.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { assert_message } from "./assert_message.mjs";
import { fn_name } from "./fn_name.mjs";
import { data_remove } from "./data_remove.mjs";
import { data_update_multiple_transform } from "./data_update_multiple_transform.mjs";
import { data_transform } from "./data_transform.mjs";
import { function_transform_args_split_lambda } from "./function_transform_args_split_lambda.mjs";
import { js_imports_add_specified } from "./js_imports_add_specified.mjs";
import { js_identifier_rename } from "./js_identifier_rename.mjs";
import { file_rename } from "./file_rename.mjs";
import { data_identifiers } from "./data_identifiers.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { list_remove } from "./list_remove.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_map } from "./list_map.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
export async function function_rename(fn_name_from, fn_name_to) {
  assert_arguments_length(arguments, 2);
  let intersecteds = await function_rename_fn_name(fn_name_from, fn_name_to);
  let identifiers = await data_identifiers();
  let fn_path_from = function_name_to_path(fn_name_from);
  let fn_path_to = function_name_to_path(fn_name_to);
  let existing = object_property_get(identifiers, fn_name_from);
  log({
    existing,
    fn_name_from,
  });
  list_remove(existing, fn_name_from);
  log({
    existing,
  });
  await file_rename(fn_path_from, fn_path_to);
  await function_transform_args_split_lambda(
    fn_name_to,
    [js_identifier_rename],
    [fn_name_from, fn_name_to],
  );
  await functions_transform(existing, function lambda(ast) {
    js_import_remove_try(ast, fn_name_from);
    js_identifier_rename(ast, fn_name_from, fn_name_to);
    js_imports_add_specified(ast, [fn_name_to]);
  });
  if (false) {
    assert_message(list_empty_is, [intersecteds], () =>
      string_combine_multiple([
        "if this assert fails, then ",
        fn_name("function_rename"),
        " needs to handle ",
        fn_name("fn_name"),
        " with ",
        fn_name_from,
        " passed into it because of these functions : ",
        list_join_comma_space(intersecteds),
      ]),
    );
  }
  let concatenated = list_concat(existing, [fn_name_to]);
  let functions_paths = list_map(concatenated, function_name_to_path);
  await data_transform(async function lambda(data) {
    data_remove(data, fn_name_from);
    await data_update_multiple_transform(functions_paths, data);
  });
  global_function_initialize(function_rename, () => ({
    on_renames,
  }));
}
