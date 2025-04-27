import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { me_name } from "./me_name.mjs";
import { html_p_text } from "./html_p_text.mjs";
export function app_portfolio() {
  let root = html_style_default_initialize();
  html_p_text(
    root,
    string_combine_multiple([
      "Welcome to the online portfolio of apps created by ",
      me_name(),
      "!",
    ]),
  );
}
