import { log } from "./log.mjs";
import { js_code_array_string } from "./js_code_array_string.mjs";
import { js_code_statement_call_args } from "./js_code_statement_call_args.mjs";
import { app_dev_screens } from "./app_dev_screens.mjs";
import { app_list_add } from "./app_list_add.mjs";
import { fn_name } from "./fn_name.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
import { string_delimit } from "./string_delimit.mjs";
export async function function_aliases_add(aliases, function_name) {
  let split = string_split_comma(aliases);
  let list_code = js_code_array_string(split);
  await app_list_add(app_dev_screens, function inserted_code() {
    let c = js_code_statement_call_args(fn_name("function_aliases_register"), [
      "all",
      js_code_statement_call_args(fn_name("fn_name"), [
        string_delimit(function_name),
      ]),
      list_code,
    ]);
    log({
      c,
    });
    return c;
  });
}
