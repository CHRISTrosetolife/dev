import { html_scroll_top } from "./html_scroll_top.mjs";
import { html_clear } from "./html_clear.mjs";
export function html_clear_scroll_top(root) {
  html_clear(root);
  html_scroll_top();
}
