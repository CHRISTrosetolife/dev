import { html_rows_set } from "./html_rows_set.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { app_dev_sandbox_result_text_set } from "./app_dev_sandbox_result_text_set.mjs";
import { app_dev_sandbox_result_error } from "./app_dev_sandbox_result_error.mjs";
import { app_dev_sandbox_result_show } from "./app_dev_sandbox_result_show.mjs";
import { app_dev_sandbox_result } from "./app_dev_sandbox_result.mjs";
import { html_button_run } from "./html_button_run.mjs";
import { app_dev_sandbox_message } from "./app_dev_sandbox_message.mjs";
import { html_textarea_code } from "./html_textarea_code.mjs";
import { function_import } from "./function_import.mjs";
import { list_first_remaining } from "./list_first_remaining.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
import { string_delimit } from "./string_delimit.mjs";
import { string_starts_with_not } from "./string_starts_with_not.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_hr } from "./html_hr.mjs";
import { app_dev_screen_command_line_prefix } from "./app_dev_screen_command_line_prefix.mjs";
import { html_value_set } from "./html_value_set.mjs";
export async function app_dev_sandbox_command_line(
  root,
  args,
  try_out_message,
  result_get,
) {
  html_hr(root);
  html_cycle_code(
    root,
    string_combine_multiple([
      app_dev_sandbox_message(),
      try_out_message,
      " from the command-line :",
    ]),
  );
  let textarea = html_textarea_code(root);
  let rows = 4;
  html_rows_set(textarea, rows);
  let prefix = app_dev_screen_command_line_prefix();
  html_value_set(
    textarea,
    string_combine_multiple([prefix, list_join_space(args)]),
  );
  html_button_run(root, run_click, "");
  let result_component = app_dev_sandbox_result(root);
  async function run_click() {
    app_dev_sandbox_result_show(result_component);
    let text = html_value_get(textarea);
    if (string_starts_with_not(text, prefix)) {
      let message = "must begin with : " + string_delimit(prefix);
      app_dev_sandbox_result_error(result_component, message);
      return;
    }
    let without = string_prefix_without(text, prefix);
    let parts = string_split_space(without);
    let { first: function_name, remaining } = list_first_remaining(parts);
    let fn;
    try {
      fn = await function_import(function_name);
    } catch (e) {
      app_dev_sandbox_result_error(
        result_component,
        string_combine_multiple([
          "failed to import ",
          function_name,
          " ; error message : ",
          e,
        ]),
      );
      return;
    }
    let fn_result;
    try {
      fn_result = await fn(...remaining);
    } catch (e) {
      app_dev_sandbox_result_error(result_component, e);
      return;
    }
    let result = await result_get(fn_result, remaining);
    app_dev_sandbox_result_text_set(result_component, result);
  }
}
