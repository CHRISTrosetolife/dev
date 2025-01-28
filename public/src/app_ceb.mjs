import { html_style_link_blank } from "./html_style_link_blank.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export async function app_ceb() {
  let body = html_style_default_initialize();
  html_style_link_blank("ceb2.html")(
    html_button_width_full_text_click(body, "New Cebuano Language Learn App"),
  );
  html_style_link_blank("ceb1.html")(
    html_button_width_full_text_click(body, "Old Cebuano Language Learn App"),
  );
}
