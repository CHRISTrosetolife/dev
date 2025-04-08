import { fn_name } from "./fn_name.mjs";
import { app_list_add } from "./app_list_add.mjs";
import { lesson_new_name } from "./lesson_new_name.mjs";
import { js_code_statement_call_args } from "./js_code_statement_call_args.mjs";
import { app_learn_code_modules } from "./app_learn_code_modules.mjs";
export async function lesson_new_modules_add(name) {
  if (false) {
    let lesson_name = lesson_new_name(name);
  }
  await app_list_add(app_learn_code_modules, function inserted_code() {
    let v = js_code_statement_call_args(fn_name("list_add"), [
      "module_current",
      name,
    ]);
    return v;
  });
}
