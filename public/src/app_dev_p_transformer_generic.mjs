import { html_style_alternate_short_function_name } from "./html_style_alternate_short_function_name.mjs";
import { function_transform } from "./function_transform.mjs";
export function app_dev_p_transformer_generic(root, transformer, prefix) {
  let message =
    prefix +
    " we run `" +
    function_transform.name +
    "` and pass in `" +
    transformer.name +
    "` and the name of the function ...";
  html_style_alternate_short_function_name(root, message);
}
