import { list_concat } from "./list_concat.mjs";
import { list_between } from "./list_between.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { functions_names } from "./functions_names.mjs";
import { noop } from "./noop.mjs";
import { app_code_button_rename_generic } from "./app_code_button_rename_generic.mjs";
export function app_code_button_copy_generic(
  overlay,
  button_text,
  menu_refresh,
  fn,
  fn_args_get,
  ast_change_finish,
  overlay_remove,
) {
  app_code_button_rename_generic(
    overlay,
    button_text,
    menu_refresh,
    noop,
    functions_names,
    "Function name new",
    "Function already exists",
    async function (function_selected, after_value) {
      let fn_args = fn_args_get(after_value);
      await fn(...fn_args);
      await ast_change_finish(
        string_combine_multiple(
          list_between(list_concat([fn.name], fn_args), " "),
        ),
      );
      await on_finish(after_value);
      overlay_remove();
    },
  );
}
