import { html_style_centered } from "./html_style_centered.mjs";
import { html_p_text } from "./html_p_text.mjs";
export function html_p_text_centered(root, text) {
  let b = html_p_text(root, text);
  html_style_centered(b);
}
