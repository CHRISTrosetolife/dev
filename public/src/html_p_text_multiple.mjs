import { html_p_text } from "./html_p_text.mjs";
export function html_p_text_multiple(parent, paragraphs) {
  for (let p of paragraphs) {
    html_p_text(parent, p);
  }
}
