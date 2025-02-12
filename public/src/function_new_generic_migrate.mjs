import { function_transform } from "./function_transform.mjs";
import { js_visit_calls } from "./js_visit_calls.mjs";
import { each_object_async } from "./each_object_async.mjs";
import { fn_name } from "./fn_name.mjs";
import { functions_identifier } from "./functions_identifier.mjs";
export async function function_new_generic_migrate() {
  let f_name = fn_name("function_new_generic");
  let results = await functions_identifier(f_name);
  await each_object_async(results, async (f_name_result) => {
    await function_transform(f_name_result, $ay$r);
    js_visit_calls();
  });
  return results;
}
