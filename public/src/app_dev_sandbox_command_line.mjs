import { function_import } from "./function_import.mjs";
import { html_style_alternate_monospace_short } from "./html_style_alternate_monospace_short.mjs";
import { app_learn_code_style_code_error } from "./app_learn_code_style_code_error.mjs";
import { list_first_remaining } from "./list_first_remaining.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
import { app_learn_code_code_background_set } from "./app_learn_code_code_background_set.mjs";
import { string_delimit } from "./string_delimit.mjs";
import { string_starts_with_not } from "./string_starts_with_not.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { app_learn_code_code_part_contrast } from "./app_learn_code_code_part_contrast.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_style_width_full } from "./html_style_width_full.mjs";
import { html_textarea } from "./html_textarea.mjs";
import { html_hr } from "./html_hr.mjs";
import { app_dev_screen_command_line_prefix } from "./app_dev_screen_command_line_prefix.mjs";
export async function app_dev_sandbox_command_line(
  root,
  args,
  try_out_message,
  result_get,
) {
  let prefix = app_dev_screen_command_line_prefix();
  html_hr(root);
  html_style_alternate_monospace_short(
    root,
    "here is a sandbox for you to try out " +
      try_out_message +
      " from the command-line :",
  );
  let textarea = html_textarea(root);
  html_style_width_full(textarea);
  html_attribute_set(textarea, "rows", 2);
  html_attribute_set(textarea, "spellcheck", "false");
  html_inner_set(
    textarea,
    string_combine_multiple([prefix, list_join_space(args)]),
  );
  html_button_width_full_text_click(root, "💻 run", run_click);
  let result_component = app_learn_code_code_part_contrast(root, "");
  await run_click();
  async function run_click() {
    let text = html_value_get(textarea);
    if (string_starts_with_not(text, prefix)) {
      let message = "must begin with : " + string_delimit(prefix);
      run_error(message);
      return;
    }
    app_learn_code_code_background_set(result_component);
    let without = string_prefix_without(text, prefix);
    let parts = string_split_space(without);
    let { first: function_name, remaining } = list_first_remaining(parts);
    let fn;
    try {
      fn = await function_import(function_name);
    } catch (e) {
      run_error(
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
      run_error(e);
      return;
    }
    let result = await result_get(fn_result, remaining);
    html_inner_set(result_component, result);
    function run_error(message) {
      app_learn_code_style_code_error(result_component);
      html_inner_set(result_component, message);
    }
  }
}
