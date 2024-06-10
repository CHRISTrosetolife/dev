import { html_style_code } from "./html_style_code.mjs";
import { noop } from "./noop.mjs";
import { html_style_alternate } from "./html_style_alternate.mjs";
import { html_li } from "./html_li.mjs";
export function html_style_alternate_code_li(parent, list) {
  html_style_alternate(parent, html_li, [noop, html_style_code], list);
}
