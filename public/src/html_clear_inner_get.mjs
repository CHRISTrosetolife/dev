import { html_clear } from "./html_clear.mjs";
import { html_inner_get } from "./html_inner_get.mjs";
export function html_clear_inner_get(e) {
  let text = html_inner_get(e);
  html_clear(e);
  return text;
}
