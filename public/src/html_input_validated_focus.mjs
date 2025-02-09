import { html_focus } from "./html_focus.mjs";
import { html_input_validated } from "./html_input_validated.mjs";
export function html_input_validated_focus(root, placeholder, conditions) {
  let st = html_input_validated(root, placeholder, conditions);
  html_focus(st);
  return st;
}
