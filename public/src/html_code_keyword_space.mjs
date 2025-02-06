import { html_span_text } from "./html_span_text.mjs";
import { html_code_keyword } from "./html_code_keyword.mjs";
export function html_code_keyword_space(parent, kw) {
  html_code_keyword(parent, kw);
  html_span_text(parent, " ");
}
