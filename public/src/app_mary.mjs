import { html_button_add } from "./html_button_add.mjs";
import { html_textarea_width_full } from "./html_textarea_width_full.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { clipboard_paste_web } from "./clipboard_paste_web.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { clipboard_copy_web } from "./clipboard_copy_web.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export async function app_mary() {
  let body = html_style_default_initialize();
  let prayer = await clipboard_paste_web();
  let response =
    "Behold, I am an unworthy servant of the LORD. May the word of the LORD come true.";
  await clipboard_copy_web(response);
  html_p_text(body, "Response copied to clipboard:");
  html_p_text(body, response);
  let t = html_textarea_width_full(body);
  html_value_set(t, prayer);
  html_button_add(root, "word", download);
}
