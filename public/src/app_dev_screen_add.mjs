import { app_list_add } from "./app_list_add.mjs";
import { lesson_new_name } from "./lesson_new_name.mjs";
import { list_add } from "./list_add.mjs";
import { js_code_statement_call_args } from "./js_code_statement_call_args.mjs";
import { app_learn_code_modules } from "./app_learn_code_modules.mjs";
export async function app_dev_screen_add(name) {
  let lesson_name = lesson_new_name(name);
  await app_list_add(app_learn_code_modules, function inserted_code() {
    return js_code_statement_call_args(list_add.name, [
      "module_current",
      lesson_name,
    ]);
  });
}
