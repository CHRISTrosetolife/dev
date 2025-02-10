import { list_sort_map } from "./list_sort_map.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { round_2 } from "./round_2.mjs";
import { date_now_month_previous } from "./date_now_month_previous.mjs";
import { log } from "./log.mjs";
import { date_difference_hours } from "./date_difference_hours.mjs";
import { app_sleep_when_get } from "./app_sleep_when_get.mjs";
import { app_sleep_when } from "./app_sleep_when.mjs";
import { app_sleep_wakeups } from "./app_sleep_wakeups.mjs";
import { app_sleep_list_name } from "./app_sleep_list_name.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { each_async } from "./each_async.mjs";
import { app_sleep_date_download } from "./app_sleep_date_download.mjs";
import { date_now } from "./date_now.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { app_sleep_types } from "./app_sleep_types.mjs";
import { each } from "./each.mjs";
import { each_object } from "./each_object.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { app_sleep_sleeps } from "./app_sleep_sleeps.mjs";
export async function app_sleep_view_refresh(parent) {
  html_clear(parent);
  let now = date_now();
  let previous_month = date_now_month_previous();
  let dates = [previous_month, now];
  let items = await list_adder_async(async (la) => {
    await each_async(dates, async (d) => {
      log({
        d,
      });
      let { month_path, data } = await app_sleep_date_download(d);
      each_object(data, (day, data_day) => {
        each(app_sleep_types(), (sleep_type) => {
          let list_name = object_property_get(
            sleep_type,
            app_sleep_list_name(),
          );
          if (object_property_exists(data_day, list_name)) {
            let list = object_property_get(data_day, list_name);
            each(list, (item) => {
              let entry = {
                [app_sleep_when()]: item,
                [app_sleep_list_name()]: list_name,
              };
              la(entry);
            });
          }
        });
      });
    });
  });
  list_sort_map(items, app_sleep_when_get);
  let sleep_start = null;
  each(items, (item) => {
    let when = app_sleep_when_get(item);
    let sleep_type = object_property_get(item, app_sleep_list_name());
    if (sleep_start === null) {
      if (sleep_type === app_sleep_sleeps()) {
        sleep_start = when;
      }
    } else {
      if (sleep_type === app_sleep_wakeups()) {
        let options = {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        };
        let dateString = when.toLocaleDateString("en-US", options);
        html_p_text(parent, dateString);
        let hours = date_difference_hours(sleep_start, when);
        hours = round_2(hours);
        let hours_component = html_p_text(
          parent,
          string_combine_multiple([hours, " hours"]),
        );
        html_style_bold(hours_component);
        sleep_start = null;
      }
    }
  });
}
