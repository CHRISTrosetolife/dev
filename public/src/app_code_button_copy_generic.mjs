import { noop } from "./noop.mjs";
import { function_run } from "./function_run.mjs";
import { app_code_refresh_function_change } from "./app_code_refresh_function_change.mjs";
import { list_concat } from "./list_concat.mjs";
import { functions_names } from "./functions_names.mjs";
import { app_code_button_rename_generic } from "./app_code_button_rename_generic.mjs";
import { list_join_space } from "./list_join_space.mjs";
export function app_code_button_copy_generic(
  context,
  overlay,
  button_text,
  menu_refresh,
  f_name,
  fn_args_get,
  ast_change_finish,
) {
  app_code_button_rename_generic(
    context,
    overlay,
    button_text,
    menu_refresh,
    noop,
    functions_names,
    "Function name new",
    "Function already exists",
    async function (on_overlay_result, after_value) {
      let fn_args = fn_args_get(after_value);
      await function_run(f_name, fn_args);
      await ast_change_finish(
        list_join_space(list_concat([f_name], fn_args)),
        after_value,
      );
      await app_code_refresh_function_change(context, after_value);
    },
  );
}
