import { function_transform } from "./function_transform.mjs";
import { html_style_function_name } from "./html_style_function_name.mjs";
import { noop } from "./noop.mjs";
import { html_style_alternate_short_p } from "./html_style_alternate_short_p.mjs";
export function app_dev_p_transformer(root, transformer) {
  let message =
    "... and we run `" +
    function_transform.name +
    "` and pass in `" +
    transformer +
    "` and the name of the function ...";
  html_style_alternate_short_p(root, [noop, html_style_function_name], message);
}
