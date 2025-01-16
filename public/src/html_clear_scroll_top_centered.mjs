import { html_style_centered } from "./html_style_centered.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
export function html_clear_scroll_top_centered(root) {
  html_clear_scroll_top(root);
  html_style_centered(root);
}
