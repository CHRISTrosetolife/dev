import { function_transform } from "./function_transform.mjs";
import { each_async } from "./each_async.mjs";
import { log } from "./log.mjs";
import { js_await_add_recursive } from "./js_await_add_recursive.mjs";
import { function_parse } from "./function_parse.mjs";
import { data_functions_async_is } from "./data_functions_async_is.mjs";
import { list_difference } from "./list_difference.mjs";
import { data_importing } from "./data_importing.mjs";
import { functions_data_get_list } from "./functions_data_get_list.mjs";
export async function js_asyncify_recursive(this_name, stack, functions) {
  let importings = await functions_data_get_list(data_importing, this_name);
  let difference = list_difference(importings, stack);
  log({
    importings,
    difference,
  });
  await each_async(difference, async function (importing) {
    let async_is = data_functions_async_is(functions, importing);
    log({
      importing,
      async_is,
    });
    if (!async_is) {
      let ast_importing = await function_parse(importing);
      await js_await_add_recursive(ast_importing, stack);
      await function_transform(importing, async function (ast) {
        let v = await js_await_add_recursive(ast_importing, stack);
        return v;
      });
    }
  });
}
