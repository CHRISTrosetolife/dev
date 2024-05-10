import { html_style_alternate_monospace_short } from "./html_style_alternate_monospace_short.mjs";
export function html_style_alternate_monospace_short_multiple(
  parent,
  messages,
) {
  for (let message of messages) {
    html_style_alternate_monospace_short(parent, message);
  }
}
