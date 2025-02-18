import { data_identifiers_each_lock } from "./data_identifiers_each_lock.mjs";
import { function_transform } from "./function_transform.mjs";
export async function data_identifiers_each_transform(
  function_name,
  js_params_objectify,
) {
  await data_identifiers_each_lock(
    function_name,
    async function lambda(f_name) {
      await function_transform(f_name, js_params_objectify);
    },
  );
}
