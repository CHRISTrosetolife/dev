import { each } from "./each.mjs";
import { html_p } from "./html_p.mjs";
import { html_p_text } from "./html_p_text.mjs";
export function html_p_text_multiple(parent, paragraphs) {
  let container = html_p(parent);
  each(paragraphs, function lambda_each(p) {
    html_p_text(container, p);
  });
  let v = container;
  return v;
}
