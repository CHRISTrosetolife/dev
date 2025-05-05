import { each } from "./each.mjs";
import { html_p_text } from "./html_p_text.mjs";
export function html_p_text_multiple(parent, paragraphs) {
  each(paragraphs, function lambda_each(p) {
    html_p_text(parent, p);
  });
}
