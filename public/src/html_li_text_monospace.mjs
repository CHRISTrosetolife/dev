import { html_style_monospace } from "./html_style_monospace.mjs";
import { html_li_text } from "./html_li_text.mjs";
export function html_li_text_monospace(ol4, code) {
  let li1 = html_li_text(ol4, code);
  html_style_monospace(li1);
}
