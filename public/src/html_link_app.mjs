import { html_link } from "./html_link.mjs";
import { app_url } from "./app_url.mjs";
export function html_link_app(a_name, row) {
  let website_url = app_url(a_name);
  html_link(row, website_url);
}
