import { html_style_text_decoration_property } from "./html_style_text_decoration_property.mjs";
import { html_style } from "./html_style.mjs";
export function html_style_underline(root) {
  html_style(root, {
    [html_style_text_decoration_property()]: "underline",
  });
}
