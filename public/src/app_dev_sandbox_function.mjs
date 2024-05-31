import { html_value_set } from "./html_value_set.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_textarea_code } from "./html_textarea_code.mjs";
import { app_dev_sandbox_message } from "./app_dev_sandbox_message.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_style_alternate_monospace_short } from "./html_style_alternate_monospace_short.mjs";
import { html_hr } from "./html_hr.mjs";
export function app_dev_sandbox_function() {
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
  html_value_set(textarea, code_initial);
}
