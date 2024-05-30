import { html_style_function_name } from "./html_style_function_name.mjs";
import { noop } from "./noop.mjs";
import { html_p } from "./html_p.mjs";
import { html_style_alternate_short } from "./html_style_alternate_short.mjs";
export function html_style_alternate_short_function_name(root, message) {
  html_style_alternate_short(
    root,
    html_p,
    [noop, html_style_function_name],
    message,
  );
}
