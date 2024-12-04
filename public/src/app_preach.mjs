import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { path_join } from "./path_join.mjs";
import { http_get } from "./http_get.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { html_script_axios } from "./html_script_axios.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { each } from "./each.mjs";
import { sermons_list } from "./sermons_list.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export async function app_preach() {
  let root = html_style_default_initialize();
  await html_script_axios(root);
  let ss = sermons_list();
  each(ss, (s) => {
    html_button_width_full_text_click(root, s, async () => {
      html_clear_scroll_top(root);
      await http_get(
        path_join([string_combine_multiple(["/", sermons_path()]), s]),
      );
    });
  });
}
