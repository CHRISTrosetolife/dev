import { html_style_background_color_yellow } from "./html_style_background_color_yellow.mjs";
import { list_get } from "./list_get.mjs";
import { html_style_background_color_transparent } from "./html_style_background_color_transparent.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { prayers_list } from "./prayers_list.mjs";
import { prayers } from "./prayers.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { null_not_is } from "./null_not_is.mjs";
export function app_pray() {
  let body = html_style_default_initialize();
  let ps = prayers();
  let pl = prayers_list(ps);
  let rows = list_map_index(pl, function lambda_each(prayer, index) {
    let p = html_p_text(body, prayer);
    p.selected = false;
    html_on_click(p, function () {
      p.selected = !p.selected;
      let index_old = storage_local_get(app_pray, "prayer_index");
      if (null_not_is(index_old)) {
        let p_old = list_get(rows, index_old);
        p_old.selected = false;
        html_style_background_color_transparent(p_old);
      }
      let value = p.selected ? index : null;
      storage_local_set(app_pray, "prayer_index", value);
      (p.selected
        ? html_style_background_color_yellow
        : html_style_background_color_transparent)(p);
    });
    let v = p;
    return v;
  });
}
