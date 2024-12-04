import { html_p_text } from "./html_p_text.mjs";
import { sermon_path_suffix } from "./sermon_path_suffix.mjs";
import { sermon_folder_name } from "./sermon_folder_name.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { path_join } from "./path_join.mjs";
import { http_get } from "./http_get.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { each } from "./each.mjs";
import { sermons_list } from "./sermons_list.mjs";
export function app_preach_main(root) {
  html_clear_scroll_top(root);
  let ss = sermons_list();
  each(ss, (s) => {
    html_button_width_full_text_click(root, s, async () => {
      html_clear_scroll_top(root);
      html_button_width_full_text_click(root, s, () => app_preach_main(root));
      let t = await http_get(
        path_join([
          string_combine_multiple(["/", sermon_folder_name()]),
          string_combine_multiple([s, sermon_path_suffix()]),
        ]),
      );
      html_p_text(root, t);
    });
  });
}
