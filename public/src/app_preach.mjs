import { html_script_axios } from "./html_script_axios.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { each } from "./each.mjs";
import { sermons_list } from "./sermons_list.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export async function app_preach() {
  let body = html_style_default_initialize();
  await html_script_axios(body);
  let ss = sermons_list();
  each(ss, (s) => {
    html_button_width_full_text_click(body, s, () => {});
  });
}
