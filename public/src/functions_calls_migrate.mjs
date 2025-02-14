import { js_visit_calls } from "./js_visit_calls.mjs";
import { log } from "./log.mjs";
import { function_transform } from "./function_transform.mjs";
import { each_object_async } from "./each_object_async.mjs";
import { functions_identifier } from "./functions_identifier.mjs";
export async function functions_calls_migrate(f_name, migrate) {
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
}
