import { list_get_wrap } from "./list_get_wrap.mjs";
import { html_style_background_color } from "./html_style_background_color.mjs";
import { sleep_0 } from "./sleep_0.mjs";
import { html_scroll_center } from "./html_scroll_center.mjs";
import { html_button } from "./html_button.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { html_style_background_color_transparent } from "./html_style_background_color_transparent.mjs";
import { list_get } from "./list_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { app_pray } from "./app_pray.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
import { prayers_list } from "./prayers_list.mjs";
import { html_span } from "./html_span.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export async function app_pray_generic(ps) {
  let body = html_style_default_initialize();
  let top = html_span(body);
  let pl = prayers_list(ps);
  let index_load = storage_local_get(app_pray, "prayer_index");
  let rows = list_map_index(pl, function lambda_each(prayer, index) {
    let p = html_p_text(body, prayer);
    p.selected = index === index_load;
    colorize(p, index);
    html_on_click(p, function () {
      p.selected = !p.selected;
      let index_old = storage_local_get(app_pray, "prayer_index");
      if (null_not_is(index_old)) {
        let p_old = list_get(rows, index_old);
        p_old.selected = false;
        html_style_background_color_transparent(p_old);
      }
      if (p.selected) {
        html_scroll_center(p);
      }
      let value = p.selected ? index : null;
      storage_local_set(app_pray, "prayer_index", value);
      colorize(p, index);
    });
    let v = p;
    return v;
  });
  html_button(body, "Scroll to top", function () {
    html_scroll_center(top);
  });
  await sleep_0();
  html_scroll_center(list_get(rows, index_load));
  function colorize(p, index) {
    let choices = ["#90EE90", "#7CFC00", "#50C878"];
    if (p.selected) {
      html_style_background_color(p, list_get_wrap(choices, index));
    } else {
      html_style_background_color_transparent(p);
    }
  }
}
