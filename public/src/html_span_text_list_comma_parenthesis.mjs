import { html_span_text_wrap_parenthesis } from "./html_span_text_wrap_parenthesis.mjs";
import { html_span_text_list_comma } from "./html_span_text_list_comma.mjs";
export function html_span_text_list_comma_parenthesis(parent, list, lambda) {
  html_span_text_wrap_parenthesis(parent, lambda);
  function lambda() {
    html_span_text_list_comma(parent, list, lambda);
  }
}
