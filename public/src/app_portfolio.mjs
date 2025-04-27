import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { me_name } from "./me_name.mjs";
export function app_portfolio() {
  let root = html_style_default_initialize();
  string_combine_multiple([
    "Welcome to the online portfolio of apps created by ",
    me_name(),
    "!",
  ]);
}
