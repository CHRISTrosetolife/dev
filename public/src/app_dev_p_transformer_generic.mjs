import { function_transform_command_line } from "./function_transform_command_line.mjs";
import { html_cycle_p } from "./html_cycle_p.mjs";
import { html_style_code } from "./html_style_code.mjs";
import { html_style_function_name } from "./html_style_function_name.mjs";
import { noop } from "./noop.mjs";
export function app_dev_p_transformer_generic(root, transformer, prefix) {
  let message =
    prefix +
    " we run `" +
    function_transform_command_line.name +
    "` and pass in `" +
    transformer.name +
    "` and the name of the `function` ...";
  html_cycle_p(
    root,
    [
      noop,
      html_style_function_name,
      noop,
      html_style_function_name,
      noop,
      html_style_code,
    ],
    message,
  );
}
