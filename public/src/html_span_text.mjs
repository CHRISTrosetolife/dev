import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { html_span } from "./html_span.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
export function html_span_text(parent, text) {
  assert_arguments_length(arguments, 2);
  let a = html_span(parent);
  html_inner_set(a, text);
  return a;
}
