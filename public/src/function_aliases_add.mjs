import { js_code_brackets_inside } from "./js_code_brackets_inside.mjs";
import { list_map } from "./list_map.mjs";
import { js_code_statement_call_args } from "./js_code_statement_call_args.mjs";
import { app_dev_screens } from "./app_dev_screens.mjs";
import { app_list_add } from "./app_list_add.mjs";
import { fn_name } from "./fn_name.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
import { string_delimit } from "./string_delimit.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
export async function function_aliases_add(aliases, function_name) {
  let split = string_split_comma(aliases);
  let mapped = list_map(split, (s) => string_delimit(s));
  let list_code = js_code_array(mapped);
  await app_list_add(app_dev_screens, function inserted_code() {
    return js_code_statement_call_args(fn_name("function_aliases_register"), [
      "all",
      js_code_statement_call_args(fn_name("fn_name"), [function_name]),
      list_code,
    ]);
  });
}
function js_code_array(mapped) {
    let joined = list_join_comma_space(mapped);
    let list_code = js_code_brackets_inside(joined);
    return list_code;
}

