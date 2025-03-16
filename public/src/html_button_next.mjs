import { html_button_next_after } from "./html_button_next_after.mjs";
export function html_button_next(root, next_on_click) {
  let after = "";
  let v = html_button_next_after(root, after, next_on_click);
  return v;
}
