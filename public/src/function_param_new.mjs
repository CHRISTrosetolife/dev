import { js_param_new } from "./js_param_new.mjs";
import { function_transform_args_split_lambda } from "./function_transform_args_split_lambda.mjs";
import { data_identifiers } from "./data_identifiers.mjs";
import { each_async } from "./each_async.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export async function function_param_new(
  function_name,
  param_name,
  default_value_string,
) {
  assert_arguments_length(arguments, 3);
  let dis = await data_identifiers();
  let fns = object_property_get(dis, function_name);
  await each_async(fns, async (fn) => {
    await function_transform_args_split_lambda(
      fn,
      [js_param_new],
      [function_name, param_name, default_value_string],
    );
  });
}
