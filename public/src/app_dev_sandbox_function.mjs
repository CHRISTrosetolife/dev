import { app_dev_sandbox_result_text_set } from "./app_dev_sandbox_result_text_set.mjs";
import { app_dev_sandbox_result_error } from "./app_dev_sandbox_result_error.mjs";
import { app_dev_sandbox_result_show } from "./app_dev_sandbox_result_show.mjs";
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
export function app_dev_sandbox_function(
  root,
  try_out_message,
  code_initial,
  run_click,
  result_get,
) {
  html_hr(root);
  html_style_alternate_monospace_short(
    root,
    string_combine_multiple([app_dev_sandbox_message(), try_out_message]),
  );
  let textarea = html_textarea_code(root);
  html_attribute_set(textarea, "rows", 2);
  html_value_set(textarea, code_initial);
  html_button_run(root, async () => {
    await file_overwrite();
    app_dev_sandbox_result_show(result_component);
    let fn_result;
    try {
      fn_result = await run_click(html_value_get(textarea));
    } catch (e) {
      app_dev_sandbox_result_error(result_component, e);
    }
    let result = await result_get(fn_result);
    app_dev_sandbox_result_text_set(result_component, result);
  });
}
