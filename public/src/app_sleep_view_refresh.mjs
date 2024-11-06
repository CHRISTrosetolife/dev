import { app_sleep_list_name } from "./app_sleep_list_name.mjs";
import { date_to } from "./date_to.mjs";
import { list_sort } from "./list_sort.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { each_async } from "./each_async.mjs";
import { date_month_previous } from "./date_month_previous.mjs";
import { app_sleep_date_download } from "./app_sleep_date_download.mjs";
import { date_now } from "./date_now.mjs";
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
  let dates = [previous_month, now];
  let when_property = "when";
  let items = await list_adder_async(async (la) => {
    await each_async(dates, async (d) => {
      let { month_path, data } = await app_sleep_date_download(d);
      each_object(data, (day, data_day) => {
        html_p_text_centered(parent, day);
        each(app_sleep_types(), (sleep_type) => {
          let list_name = object_property_get(
            sleep_type,
            app_sleep_list_name(),
          );
          if (object_property_exists(data_day, list_name)) {
            html_p_text_centered(parent, list_name);
            let list = object_property_get(data_day, list_name);
            each(list, (item) => {
              let entry = {
                [when_property]: item,
                [app_sleep_list_name()]: list_name,
              };
              html_p_text(parent, json_to(entry));
              la(entry);
            });
          }
        });
      });
    });
    list_sort(items, (i) =>
      date_to(object_property_get(object, when_property)),
    );
    let sleeping = false;
    each(items, (item) => {
      if (sleeping) {
        let sleep_type = object_property_get(item, app_sleep_list_name());
        if (sleep_type) {
        }
      }
    });
  });
}
