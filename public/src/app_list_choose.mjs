import { html_scroll_nearest } from "./html_scroll_nearest.mjs";
import { html_button } from "./html_button.mjs";
import { clipboard_copy_web } from "./clipboard_copy_web.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { html_button_width_full_text_click_hr } from "./html_button_width_full_text_click_hr.mjs";
import { app_list_choice_update } from "./app_list_choice_update.mjs";
import { storage_local_initialize } from "./storage_local_initialize.mjs";
import { app_list_root } from "./app_list_root.mjs";
import { storage_local_remove } from "./storage_local_remove.mjs";
import { log } from "./log.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { each_index } from "./each_index.mjs";
import { app_list } from "./app_list.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
export function app_list_choose(body) {
  html_clear_scroll_top_centered(body);
  let split = storage_local_get(app_list, "list");
  let chosen = storage_local_initialize(app_list, "chosen", {});
  html_button_width_full_text_click_hr(body, "items", async () => {
    let ms = list_map_index(split, (line, index) => {
      return {
        choice: chosen[index] || false,
        line,
      };
    });
    let f = list_filter_property(ms, "choice", true);
    let ms2 = list_map_property(f, "line");
    let text = list_join_comma(ms2);
    log({
      text,
    });
    await clipboard_copy_web(text);
  });
  let last = null;
  html_button_width_full_text_click_hr(body, "scroll", () => {
    if (last === null) {
      return;
    }
    html_scroll_nearest(last);
  });
  html_button_width_full_text_click_hr(body, "clear list", () => {
    storage_local_remove(app_list, "list");
    app_list_root(body);
  });
  log({
    chosen,
  });
  each_index(split, (line, index) => {
    let b = html_button(body, line, () => {
      chosen[index] = !chosen[index];
      storage_local_set(app_list, "chosen", chosen);
      log({
        c: storage_local_get(app_list, "chosen"),
      });
      last = app_list_choice_update(index, b, last);
    });
    last = app_list_choice_update(index, b, last);
  });
}
