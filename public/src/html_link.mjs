import { html_span } from "./html_span.mjs";
import { html_link_text } from "./html_link_text.mjs";
export function html_link(parent, website_url) {
  html_link_text(html_span(parent), website_url);
}
