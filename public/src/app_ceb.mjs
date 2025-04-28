import { fn_name } from "./fn_name.mjs";
import { html_button_width_full_text_link } from "./html_button_width_full_text_link.mjs";
import { html_spacer_vertical_2 } from "./html_spacer_vertical_2.mjs";
import { html_style_a_plain } from "./html_style_a_plain.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { html_p_text } from "./html_p_text.mjs";
export async function app_ceb() {
  let body = html_style_default_initialize();
  html_style_a_plain();
  html_p_text(body, "It is recommended to use the new app");
  let a_name = fn_name("app_ceb2");
  let url = "ceb2.html";
  let text = "New Cebuano Language Learn App";
  html_button_width_full_text_link(body, url, text);
  html_spacer_vertical_2(body);
  html_button_width_full_text_link(
    body,
    "ceb1.html",
    "Original Cebuano Language Learn App",
  );
}
