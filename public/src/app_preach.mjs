import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { each } from "./each.mjs";
import { sermons_list } from "./sermons_list.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export function app_preach() {
  let body = html_style_default_initialize();
  let ss = sermons_list();
  each(ss, (s) => {
    html_button_width_full_text_click;
  });
}
