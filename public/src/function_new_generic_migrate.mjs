import { object_property_get } from "./object_property_get.mjs";
import { function_transform } from "./function_transform.mjs";
import { js_visit_calls } from "./js_visit_calls.mjs";
import { each_object_async } from "./each_object_async.mjs";
import { fn_name } from "./fn_name.mjs";
import { functions_identifier } from "./functions_identifier.mjs";
export async function function_new_generic_migrate() {
  let f_name = fn_name("function_new_generic");
  let results = await functions_identifier(f_name);
  await each_object_async(results, async (f_name_result) => {
    await function_transform(f_name_result, async (ast) => {
      js_visit_calls(ast, f_name, (v) => {
        let node = object_property_get(v, "node");
        let params = object_property_get(node, "params");
      });
    });
  });
  return results;
}
