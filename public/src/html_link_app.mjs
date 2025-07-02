import { html_link } from "./html_link.mjs";
import { app_url } from "./app_url.mjs";
export function html_link_app(parent, a_name) {
  let website_url = app_url(a_name);
  html_link(parent, website_url);
}
