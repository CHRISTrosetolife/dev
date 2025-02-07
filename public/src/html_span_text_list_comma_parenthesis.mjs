import { html_span_text_list_comma } from "./html_span_text_list_comma.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function html_span_text_list_comma_parenthesis(parent, params, lambda) {
  html_span_text(parent, "(");
  html_span_text_list_comma(parent, params, lambda);
  html_span_text(parent, ")");
}
