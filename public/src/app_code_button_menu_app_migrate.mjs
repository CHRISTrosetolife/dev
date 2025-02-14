import { object_property_set } from "./object_property_set.mjs";
import { log } from "./log.mjs";
import { function_transform } from "./function_transform.mjs";
import { js_visit_calls } from "./js_visit_calls.mjs";
import { each_object_async } from "./each_object_async.mjs";
import { fn_name } from "./fn_name.mjs";
import { functions_identifier } from "./functions_identifier.mjs";
import { list_single } from "./list_single.mjs";
export async function app_code_button_menu_app_migrate() {
  let f_name = fn_name("app_code_button_menu_app");
  let results = await functions_identifier(f_name);
  await each_object_async(results, async function (f_name_result) {
    await function_transform(f_name_result, async function (ast) {
      log({
        f_name_result,
      });
      js_visit_calls(ast, f_name, migrate);
    });
  });
  return results;
  function migrate(params) {
    let p = list_single(params);
    object_property_set(p, "name", "root");
  }
}
