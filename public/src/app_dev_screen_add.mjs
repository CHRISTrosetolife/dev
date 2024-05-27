import { function_new } from "./function_new.mjs";
import { app_dev_screen_name } from "./app_dev_screen_name.mjs";
import { app_list_add } from "./app_list_add.mjs";
import { list_add } from "./list_add.mjs";
import { js_code_statement_call_args } from "./js_code_statement_call_args.mjs";
import { app_learn_code_modules } from "./app_learn_code_modules.mjs";
export async function app_dev_screen_add(name) {
  let screen_name = app_dev_screen_name(name);
  function_new(screen_name);
  await app_list_add(app_learn_code_modules, function inserted_code() {
    return js_code_statement_call_args(list_add.name, ["result", screen_name]);
  });
}
