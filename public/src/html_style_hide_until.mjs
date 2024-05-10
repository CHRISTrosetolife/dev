import { html_style_visible } from "./html_style_visible.mjs";
import { html_style_hidden } from "./html_style_hidden.mjs";
export async function html_style_hide_until(root, lambda3) {
  html_style_hidden(root);
  await lambda3();
  html_style_visible(root);
}
