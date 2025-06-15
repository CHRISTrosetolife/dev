import { log } from "./log.mjs";
import { list_get_wrap } from "./list_get_wrap.mjs";
import { html_style_background_color } from "./html_style_background_color.mjs";
import { html_style_background_color_transparent } from "./html_style_background_color_transparent.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_get } from "./list_get.mjs";
import { html_scroll_center } from "./html_scroll_center.mjs";
import { sleep_0 } from "./sleep_0.mjs";
import { html_button } from "./html_button.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { html_scroll_top } from "./html_scroll_top.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { prayers_list_begin } from "./prayers_list_begin.mjs";
import { html_p_text_multiple } from "./html_p_text_multiple.mjs";
import { html_div } from "./html_div.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
import { prayers_list } from "./prayers_list.mjs";
import { html_span } from "./html_span.mjs";
export async function app_pray_generic(body, app_fn, ps) {
  let top = html_span(body);
  let pl = prayers_list(ps);
  let index_load = storage_local_get(app_fn, "prayer_index");
  let rows = list_map_index(pl, function lambda_each(prayer, index) {
    let d = html_div(body, prayer);
    d.selected = index === index_load;
    if (d.selected) {
      html_p_text_multiple(d, prayers_list_begin());
    }
    html_p_text(d, prayer);
    colorize(d, index);
    html_on_click(d, function () {
      d.selected = !d.selected;
      prayer_index_old_transparent();
      if (d.selected) {
        html_scroll_top(d);
      }
      let value = d.selected ? index : null;
      storage_local_set(app_fn, "prayer_index", value);
      colorize(d, index);
    });
    let v = d;
    return v;
  });
  html_button(body, "Scroll to top", function () {
    storage_local_set(app_fn, "prayer_index", null);
    prayer_index_old_transparent();
    html_scroll_top(top);
  });
  await sleep_0();
  html_scroll_center(list_get(rows, index_load));
  function prayer_index_old_transparent() {
    let index_old = storage_local_get(app_fn, "prayer_index");
    log({
      index_old,
    });
    if (null_not_is(index_old)) {
      let p_old = list_get(rows, index_old);
      p_old.selected = false;
      html_style_background_color_transparent(p_old);
    }
  }
  function colorize(d, index) {
    let choices = [
      "Salmon",
      "SandyBrown",
      "Yellow",
      "lightgreen",
      "lightblue",
      "MediumPurple",
    ];
    if (d.selected) {
      html_style_background_color(d, list_get_wrap(choices, index));
    } else {
      html_style_background_color_transparent(d);
    }
  }
}
