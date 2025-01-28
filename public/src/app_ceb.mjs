import { html_button_width_full_text } from "./html_button_width_full_text.mjs";
import { html_style_link_blank } from "./html_style_link_blank.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { html_p_text } from "./html_p_text.mjs";
export async function app_ceb() {
  let body = html_style_default_initialize();
  html_p_text(body, "It is recommended to use the new app");
  html_style_link_blank("ceb2.html")(
    html_button_width_full_text(body, "New Cebuano Language Learn App"),
  );
  html_style_link_blank("ceb1.html")(
    html_button_width_full_text(body, "Original Cebuano Language Learn App"),
  );
}
