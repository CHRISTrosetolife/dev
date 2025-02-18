import { function_transform } from "./function_transform.mjs";
import { data_identifiers_each } from "./data_identifiers_each.mjs";
export async function data_identifiers_each_transform(
  function_name,
  js_params_objectify,
) {
  await data_identifiers_each(function_name, async function lambda(f_name) {
    await function_transform(f_name, js_params_objectify);
  });
}
