import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_p_text } from "./html_p_text.mjs";
export function html_p_text_combine(root, list) {
  html_p_text(root, string_combine_multiple(list));
}
