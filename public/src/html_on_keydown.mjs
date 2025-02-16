import { html_on } from "./html_on.mjs";
export function html_on_keydown(component, on_keydown) {
  let v = html_on(component, "keydown", on_keydown);
  return v;
}
