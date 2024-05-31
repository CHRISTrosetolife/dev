import { error } from "./error.mjs";
import { app_dev_sandbox_result } from "./app_dev_sandbox_result.mjs";
import { html_button_run } from "./html_button_run.mjs";
import { app_dev_sandbox_message } from "./app_dev_sandbox_message.mjs";
import { html_textarea_code } from "./html_textarea_code.mjs";
import { function_import } from "./function_import.mjs";
import { html_style_alternate_monospace_short } from "./html_style_alternate_monospace_short.mjs";
import { list_first_remaining } from "./list_first_remaining.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
import { string_delimit } from "./string_delimit.mjs";
import { string_starts_with_not } from "./string_starts_with_not.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
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
  html_style_alternate_monospace_short(
    root,
    string_combine_multiple([
      app_dev_sandbox_message(),
      try_out_message,
      " from the command-line :",
    ]),
  );
  let textarea = html_textarea_code(root);
  html_attribute_set(textarea, "rows", 2);
  let prefix = app_dev_screen_command_line_prefix();
  html_value_set(
    textarea,
    string_combine_multiple([prefix, list_join_space(args)]),
  );
  html_button_run(root, run_click);
  let result_component = app_dev_sandbox_result(root);
  async function run_click() {
    result_component.show();
    let text = html_value_get(textarea);
    if (string_starts_with_not(text, prefix)) {
      let message = "must begin with : " + string_delimit(prefix);
      result_component.error(message);
      return;
    }
    let without = string_prefix_without(text, prefix);
    let parts = string_split_space(without);
    let { first: function_name, remaining } = list_first_remaining(parts);
    let fn;
    try {
      fn = await function_import(function_name);
    } catch (e) {
      result_component.error(
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
      result_component.error(e);
      return;
    }
    let result = await result_get(fn_result, remaining);
    html_inner_set(result_component, result);
  }
}
