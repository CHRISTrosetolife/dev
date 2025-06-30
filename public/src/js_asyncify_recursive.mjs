import { js_await_add_recursive } from "./js_await_add_recursive.mjs";
import { function_parse } from "./function_parse.mjs";
import { data_functions_async_is } from "./data_functions_async_is.mjs";
import { each } from "./each.mjs";
import { list_difference } from "./list_difference.mjs";
import { data_importing } from "./data_importing.mjs";
import { functions_data_get_list } from "./functions_data_get_list.mjs";
export async function js_asyncify_recursive(this_name, stack, functions) {
  let importings = await functions_data_get_list(data_importing, this_name);
  let difference = list_difference(importings, stack);
  each(difference, async function (importing) {
    if (!data_functions_async_is(functions, importing)) {
      let ast_importing = await function_parse(importing);
      await js_await_add_recursive(ast_importing, stack);
    }
  });
}
