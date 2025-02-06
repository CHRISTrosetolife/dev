import { html_style_font_color } from "./html_style_font_color.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function html_span_text_font_color(parent, text, font_color) {
  let component = html_span_text(parent, text);
  html_style_font_color(component, font_color);
  return component;
}
