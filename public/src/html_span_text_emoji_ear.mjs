import { emoji_ear } from "./emoji_ear.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function html_span_text_emoji_ear(button) {
  html_span_text(button, string_combine_multiple([" ", emoji_ear(), " "]));
}
