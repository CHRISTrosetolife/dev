import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_button } from "./html_button.mjs";
import { html_button_next_text } from "./html_button_next_text.mjs";
export function html_button_next(root, next_on_click) {
  let after = "";
  let v = html_button(
    root,
    string_combine_multiple([html_button_next_text()]),
    next_on_click,
  );
  return v;
}
