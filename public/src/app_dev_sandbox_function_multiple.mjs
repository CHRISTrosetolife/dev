import { html_style_width_full } from "./html_style_width_full.mjs";
import { app_dev_sandbox_result_error } from "./app_dev_sandbox_result_error.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { log } from "./log.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { app_dev_sandbox_result } from "./app_dev_sandbox_result.mjs";
import { html_button_run } from "./html_button_run.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_textarea_code } from "./html_textarea_code.mjs";
import { function_read } from "./function_read.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
import { each } from "./each.mjs";
import { html_element } from "./html_element.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { app_dev_sandbox_message } from "./app_dev_sandbox_message.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_style_alternate_monospace_short } from "./html_style_alternate_monospace_short.mjs";
import { html_hr } from "./html_hr.mjs";
export async function app_dev_sandbox_function_multiple(
  root,
  function_name_choices,
  function_name,
  try_out_message,
  run_message,
  run_click,
) {
  html_hr(root);
  html_style_alternate_monospace_short(
    root,
    string_combine_multiple([app_dev_sandbox_message(), try_out_message]),
  );
  if (list_multiple_is(function_name_choices)) {
    let select = html_select(root);
    html_style_width_full(select);
    each(function_name_choices, (fn) => {
      let o = html_element(select, "option");
      html_inner_set(o, fn);
    });
  }
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
function html_select(root) {
    return html_element(root, "select");
}

