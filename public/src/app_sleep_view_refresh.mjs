import { date_month_previous } from "./date_month_previous.mjs";
import { app_sleep_date_download } from "./app_sleep_date_download.mjs";
import { date_now } from "./date_now.mjs";
import { list_adder } from "./list_adder.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { app_sleep_types } from "./app_sleep_types.mjs";
import { each } from "./each.mjs";
import { html_p_text_centered } from "./html_p_text_centered.mjs";
import { each_object } from "./each_object.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { json_to } from "./json_to.mjs";
export async function app_sleep_view_refresh(parent) {
  html_clear(parent);
  let now = date_now();
  let previous_month = date_month_previous(now);
  let dates = [now, previous_month];
  let { month_path, data } = await app_sleep_date_download(now);
  let items = list_adder((la) => {
    each_object(data, (day, data_day) => {
      html_p_text_centered(parent, day);
      each(app_sleep_types(), (sleep_type) => {
        let list_name = object_property_get(sleep_type, "list_name");
        if (object_property_exists(data_day, list_name)) {
          html_p_text_centered(parent, list_name);
          let list = object_property_get(data_day, list_name);
          each(list, (item) => {
            let entry = {
              when: item,
              sleep_type: list_name,
            };
            html_p_text(parent, json_to(entry));
            la(entry);
          });
        }
      });
    });
  });
}
