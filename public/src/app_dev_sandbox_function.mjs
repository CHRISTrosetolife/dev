import { each } from "./each.mjs";
import { function_names } from "./function_names.mjs";
import { log } from "./log.mjs";
import { function_read } from "./function_read.mjs";
import { app_dev_sandbox_result } from "./app_dev_sandbox_result.mjs";
import { app_dev_sandbox_result_error } from "./app_dev_sandbox_result_error.mjs";
import { html_button_run } from "./html_button_run.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_textarea_code } from "./html_textarea_code.mjs";
import { app_dev_sandbox_message } from "./app_dev_sandbox_message.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_style_alternate_monospace_short } from "./html_style_alternate_monospace_short.mjs";
import { html_hr } from "./html_hr.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { list_length } from "./list_length.mjs";
export async function app_dev_sandbox_function(
  root,
  function_name,
  try_out_message,
  run_message,
  run_click,
) {
  let function_names = [function_name];
  html_hr(root);
  html_style_alternate_monospace_short(
    root,
    string_combine_multiple([app_dev_sandbox_message(), try_out_message]),
  );
  if (list_length(function_names) > 1) {
  }
  each(function_names, (fn) => {});
  let value_initial = await function_read(function_name);
  let textarea = html_textarea_code(root);
  html_attribute_set(textarea, "rows", 7);
  html_value_set(textarea, value_initial);
  html_button_run(root, on_click, run_message);
  let result_component = app_dev_sandbox_result(root);
  async function on_click() {
    try {
      let file_path = function_name_to_path(function_name);
      log({
        textarea,
      });
      let value = html_value_get(textarea);
      await file_overwrite(file_path, value);
      await run_click();
      let value_new = await function_read(function_name);
      html_value_set(textarea, value_new);
    } catch (e) {
      log({
        e,
      });
      app_dev_sandbox_result_error(result_component, e);
    }
  }
  return {
    textarea,
  };
}
