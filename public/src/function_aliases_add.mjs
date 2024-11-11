import { js_code_statement_call_args } from "./js_code_statement_call_args.mjs";
import { app_dev_screens } from "./app_dev_screens.mjs";
import { app_list_add } from "./app_list_add.mjs";
import { fn_name } from "./fn_name.mjs";
export async function function_aliases_add(aliases, function_name) {
  await app_list_add(app_dev_screens, function inserted_code() {
    return js_code_statement_call_args(fn_name("list_add"), [
      "result",
      screen_name,
    ]);
  });
}
