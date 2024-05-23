import { html_style_font_color } from "./html_style_font_color.mjs";
import { list_length } from "./list_length.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { html_buttons_next_previous } from "./html_buttons_next_previous.mjs";
import { list_scramble } from "./list_scramble.mjs";
import { list_copy } from "./list_copy.mjs";
import { http_storage } from "./http_storage.mjs";
import { ceb_group_path } from "./ceb_group_path.mjs";
import { list_first } from "./list_first.mjs";
import { list_get } from "./list_get.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { each } from "./each.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
export async function app_ceb() {
  let root = html_style_default_initialize();
  let group_index = 0;
  let group = await http_storage(ceb_group_path(group_index));
  let atom = list_first(group);
  let copy = list_copy(atom);
  list_scramble(copy);
  refresh_pair(0);
  function refresh_pair(pair_index) {
    html_clear_scroll_top(root);
    let pair = list_get(copy, pair_index);
    let [cebuano, english] = pair;
    let cebuano_p = html_p_text(root, cebuano);
    html_style_font_color(cebuano_p, "darkgreen");
    let english_p = html_p_text(root, english);
    each([cebuano_p, english_p], html_style_bold);
    html_buttons_next_previous(
      root,
      refresh_pair,
      pair_index,
      list_length(copy),
    );
  }
}
