import { html_style_function_name } from "./html_style_function_name.mjs";
import { noop } from "./noop.mjs";
import { html_style_alternate_short_p } from "./html_style_alternate_short_p.mjs";
import { function_transform } from "./function_transform.mjs";
import { app_learn_code_style_code_colored } from "./app_learn_code_style_code_colored.mjs";
export function app_dev_p_transformer_generic(root, transformer, prefix) {
  let message =
    prefix +
    " we run `" +
    function_transform.name +
    "` and pass in `" +
    transformer.name +
    "` and the name of the `function` ...";
  html_style_alternate_short_p(
    root,
    [
      noop,
      html_style_function_name,
      noop,
      html_style_function_name,
      noop,
      app_learn_code_style_code_colored,
    ],
    message,
  );
}
