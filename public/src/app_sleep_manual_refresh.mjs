import { app_sleep_sleeps } from "./app_sleep_sleeps.mjs";
import { app_sleep_today_download_parts } from "./app_sleep_today_download_parts.mjs";
import { app_sleep_month_path } from "./app_sleep_month_path.mjs";
import { app_sleep_save } from "./app_sleep_save.mjs";
import { app_sleep_wakeups } from "./app_sleep_wakeups.mjs";
import { app_sleep_woke_up } from "./app_sleep_woke_up.mjs";
import { app_sleep_manual_text } from "./app_sleep_manual_text.mjs";
import { round } from "./round.mjs";
import { equal } from "./equal.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_button_previous_text } from "./html_button_previous_text.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { html_list_chooser } from "./html_list_chooser.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { range } from "./range.mjs";
import { list_map } from "./list_map.mjs";
import { range_1 } from "./range_1.mjs";
import { list_index } from "./list_index.mjs";
import { date_month_names } from "./date_month_names.mjs";
import { app_sleep_main } from "./app_sleep_main.mjs";
import { html_button_width_full_text_click_back } from "./html_button_width_full_text_click_back.mjs";
import { html_clear_scroll_top_context } from "./html_clear_scroll_top_context.mjs";
import { list_get } from "./list_get.mjs";
export function app_sleep_manual_refresh(context, parts) {
  let { year, month_index, month_name, month_padded, hours, minutes, now } =
    parts;
  let { root } = context;
  html_clear_scroll_top_context(context);
  html_button_width_full_text_click_back(root, () => app_sleep_main(context));
  let names = date_month_names();
  let pm = "pm";
  let am = "am";
  let ampms = [am, pm];
  let hours_count = 12;
  let ampm = hours >= hours_count ? pm : am;
  let ampm_index = list_index(ampms, ampm);
  let hours_12 = hours > hours_count ? hours - hours_count : hours;
  let hours_12_choices = range_1(hours_count);
  let hours_12_index = list_index(hours_12_choices, hours_12);
  let minutes_count = 60;
  let minutes_division = 5;
  let minutes_choices = list_map(
    range(minutes_count / minutes_division),
    (m) => m * minutes_division,
  );
  minutes = round(minutes / minutes_division) * minutes_division;
  let minutes_index = list_index(minutes_choices, minutes);
  html_p_text(root, year);
  html_p_text(root, month_name);
  if (false) {
    html_list_chooser(root, names, month_index, refresh, (value) => {
      month_index = value;
    });
  }
  let day = object_property_get(parts, "day");
  html_p_text(root, day);
  html_button_width_full_text_click(
    root,
    string_combine_multiple([html_button_previous_text(), " day"]),
    () => {
      object_property_set(parts, "day", day - 1);
      refresh();
    },
  );
  html_list_chooser(
    root,
    hours_12_choices,
    hours_12_index,
    refresh,
    (value) => {
      hours_12_index = value;
      hours_compute();
    },
  );
  html_list_chooser(root, ampms, ampm_index, refresh, (value) => {
    ampm_index = value;
    hours_compute();
  });
  html_list_chooser(root, minutes_choices, minutes_index, refresh, (value) => {
    minutes_index = value;
    object_property_set(
      parts,
      "minutes",
      list_get(minutes_choices, minutes_index),
    );
    refresh();
  });
  html_button_width_full_text_click(root, app_sleep_manual_text(), async () => {
    let { today, data } = await app_sleep_today_download_parts(
      year,
      month_padded,
      day,
      now,
    );
    let month_path = app_sleep_month_path(year, month_padded);
    await app_sleep_save(today, list_name, now, month_path, data, result);
  });
  let sleep_type_index = object_property_get(parts, "sleep_type_index");
  [app_sleep_wakeups(), app_sleep_sleeps()];
  html_list_chooser(
    root,
    [app_sleep_woke_up(), app_sleep_wakeups()],
    sleep_type_index,
    refresh,
    (value) => {
      sleep_type_index = value;
      object_property_set(parts, "sleep_type_index", sleep_type_index);
    },
  );
  function hours_compute() {
    ampm = list_get(ampms, ampm_index);
    hours_12 = list_get(hours_12_choices, hours_12_index);
    if (equal(ampm, pm)) {
      if (equal(hours_12, 12)) {
        hours = hours_12;
      } else {
        hours = hours_12 + hours_count;
      }
    } else {
      if (equal(hours_12, 12)) {
        hours = 0;
      } else {
        hours = hours_12;
      }
    }
    object_property_set(parts, "hours", hours);
    refresh();
  }
  function refresh() {
    app_sleep_manual_refresh(context, parts);
  }
}
