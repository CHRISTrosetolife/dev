import { html_textarea } from "./html_textarea.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { clipboard_copy_web } from "./clipboard_copy_web.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export async function app_mary() {
  let body = html_style_default_initialize();
  let text = navigator.clipboard.readText();
  let response =
    "Behold, I am an unworthy servant of the LORD. May the word of the LORD come true.";
  await clipboard_copy_web(response);
  html_p_text(body, "Response copied to clipboard:");
  html_p_text(body, response);
  html_textarea(body);
}
