import { storage_local_initialize } from "./storage_local_initialize.mjs";
import { html_scroll_center } from "./html_scroll_center.mjs";
import { html_hr } from "./html_hr.mjs";
import { app_list_root } from "./app_list_root.mjs";
import { storage_local_remove } from "./storage_local_remove.mjs";
import { log } from "./log.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { each_index } from "./each_index.mjs";
import { html_style_button_default } from "./html_style_button_default.mjs";
import { html_style_success } from "./html_style_success.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { app_list } from "./app_list.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
export function app_list_choose(body) {
  html_clear_scroll_top_centered(body);
  let last = null;
  html_button_width_full_text_click(body, "scroll", () => {
    log({
      last,
    });
    if (last === null) {
      return;
    }
    html_scroll_center(last);
  });
  html_hr(body);
  html_button_width_full_text_click(body, "clear list", () => {
    storage_local_remove(app_list, "list");
    app_list_root(body);
  });
  html_hr(body);
  let split = storage_local_get(app_list, "list");
  storage_local_initialize(app_list, "chosen", {});
  let chosen = storage_local_get(app_list, "chosen");
  log({
    chosen,
  });
  each_index(split, (line, index) => {
    let c = chosen[index];
    let b = html_button_width_full_text_click(body, line, () => {
      chosen[index] = !chosen[index];
      storage_local_set(app_list, "chosen", chosen);
      log({
        c: storage_local_get(app_list, "chosen"),
      });
      if (chosen[index]) {
        html_style_success(b);
      } else {
        html_style_button_default(b);
      }
    });
    if (false) {
      last = b;
    }
  });
}
