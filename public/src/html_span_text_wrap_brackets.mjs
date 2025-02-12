import { html_span_text_gray } from "./html_span_text_gray.mjs";
export function html_span_text_wrap_brackets(parent, lambda) {
  html_span_text_gray(parent, "[ ");
  lambda(parent);
  html_span_text_gray(parent, " ]");
}
