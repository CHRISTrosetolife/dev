import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_style_link } from "./html_style_link.mjs";
export function html_style_link_prefix(prefix, phone_number_text) {
  return html_style_link(
    string_combine_multiple([prefix, ":", phone_number_text]),
  );
}
