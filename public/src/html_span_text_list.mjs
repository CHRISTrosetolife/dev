import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function html_span_text_list(parent, list) {
  html_span_text(parent, string_combine_multiple(list));
}
