import { html_button_next_text } from "./html_button_next_text.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_button } from "./html_button.mjs";
export function html_button_next_after(root, after, next_on_click) {
  let v = html_button(
    root,
    string_combine_multiple([html_button_next_text(), after]),
    next_on_click,
  );
  return v;
}
