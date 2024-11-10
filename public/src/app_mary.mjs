import { clipboard_copy_web } from "./clipboard_copy_web.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export function app_mary() {
  let body = html_style_default_initialize();
  let response =
    "Behold, I am an unworthy servant of the LORD. May the word of the LORD come true.";
  clipboard_copy_web(response);
}
