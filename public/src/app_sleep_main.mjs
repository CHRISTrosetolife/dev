import { log } from "./log.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_p_text_centered } from "./html_p_text_centered.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { app_sleep_types } from "./app_sleep_types.mjs";
import { each } from "./each.mjs";
import { each_object } from "./each_object.mjs";
import { app_sleep_sleeps } from "./app_sleep_sleeps.mjs";
import { app_sleep_wakeups } from "./app_sleep_wakeups.mjs";
import { app_sleep_sleep } from "./app_sleep_sleep.mjs";
import { app_sleep_woke_up } from "./app_sleep_woke_up.mjs";
import { app_sleep_manual_text } from "./app_sleep_manual_text.mjs";
import { app_sleep_manual } from "./app_sleep_manual.mjs";
import { html_hr } from "./html_hr.mjs";
import { app_sleep_today_download } from "./app_sleep_today_download.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { app_sleep_record } from "./app_sleep_record.mjs";
import { html_clear_scroll_top_context } from "./html_clear_scroll_top_context.mjs";
import { html_div } from "./html_div.mjs";
export function app_sleep_main(context) {
  let root = html_clear_scroll_top_context(context);
  app_sleep_record(context, app_sleep_woke_up(), app_sleep_wakeups());
  app_sleep_record(context, app_sleep_sleep(), app_sleep_sleeps());
  html_button_width_full_text_click(root, app_sleep_manual_text(), () => {
    app_sleep_manual(context);
  });
  html_hr(root);
  let result = html_div(root);
  html_button_width_full_text_click(root, "📃 data this month", async () => {
    html_clear(result);
    let { data } = await app_sleep_today_download();
    each_object(data, (day, data_day) => {
      html_p_text_centered(result, day);
      each(app_sleep_types(), (sleep_type) => {
        let list_name = object_property_get(sleep_type, "list_name");
        html_p_text_centered(result, list_name);
        if (object_property_exists(data_day, list_name)) {
          let list = object_property_get(data_day, list_name);
          each(list, (item) => {
            html_button_width_full_text_click(result, item, () => {});
          });
        }
      });
    });
    log({
      data,
    });
  });
}
