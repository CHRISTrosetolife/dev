import { html_button_width_full_text } from "./html_button_width_full_text.mjs";
import { html_style_link_blank } from "./html_style_link_blank.mjs";
export function html_button_width_full_text_link(url, body, text) {
  html_style_link_blank(url)(html_button_width_full_text(body, text));
}
