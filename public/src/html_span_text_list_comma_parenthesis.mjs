import { html_span_text_gray } from "./html_span_text_gray.mjs";
import { html_span_text_list_comma } from "./html_span_text_list_comma.mjs";
export function html_span_text_list_comma_parenthesis(parent, params, lambda) {
  html_span_text_gray(parent, "( ");
  html_span_text_list_comma(parent, params, lambda);
  html_span_text_gray(parent, " )");
}
