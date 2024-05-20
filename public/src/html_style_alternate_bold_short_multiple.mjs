import { html_style_alternate_bold_short } from "./html_style_alternate_bold_short.mjs";
export function html_style_alternate_bold_short_multiple(parent, lines) {
  for (let line of lines) {
    html_style_alternate_bold_short(parent, line);
  }
}
