import { log } from "./log.mjs";
import { firebase_save } from "./firebase_save.mjs";
import { list_remove } from "./list_remove.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { app_sleep_types } from "./app_sleep_types.mjs";
import { each } from "./each.mjs";
import { html_p_text_centered } from "./html_p_text_centered.mjs";
import { each_object } from "./each_object.mjs";
import { app_sleep_today_download } from "./app_sleep_today_download.mjs";
import { html_clear } from "./html_clear.mjs";
export async function app_sleep_delete_refresh(parent) {
  html_clear(parent);
  let { month_path, data } = await app_sleep_today_download();
  each_object(data, (day, data_day) => {
    html_p_text_centered(parent, day);
    each(app_sleep_types(), (sleep_type) => {
      let list_name = object_property_get(sleep_type, "list_name");
      if (object_property_exists(data_day, list_name)) {
        html_p_text_centered(parent, list_name);
        let list = object_property_get(data_day, list_name);
        each(list, (item) => {
          html_button_width_full_text_click(parent, item, async () => {
            list_remove(list, item);
            log({
              month_path,
            });
            return;
            await firebase_save(month_path, data);
            await app_sleep_delete_refresh(parent);
          });
        });
      }
    });
  });
}
