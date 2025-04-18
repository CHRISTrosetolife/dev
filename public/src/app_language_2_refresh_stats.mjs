import { html_button_reset } from "./html_button_reset.mjs";
import { app_language_2_factor_string } from "./app_language_2_factor_string.mjs";
import { list_map } from "./list_map.mjs";
import { app_language_2_stats_initial } from "./app_language_2_stats_initial.mjs";
import { app_language_2_stats_get } from "./app_language_2_stats_get.mjs";
import { app_language_2_gaps_get } from "./app_language_2_gaps_get.mjs";
import { app_language_2_factor_get } from "./app_language_2_factor_get.mjs";
import { app_language_2_button_back_home } from "./app_language_2_button_back_home.mjs";
import { string_case_upper_first } from "./string_case_upper_first.mjs";
import { number_format_percent } from "./number_format_percent.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
import { storage_local_exists } from "./storage_local_exists.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { object_property_add } from "./object_property_add.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { integer_parse } from "./integer_parse.mjs";
import { list_closest } from "./list_closest.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { each_object } from "./each_object.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { each_object_values } from "./each_object_values.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { each } from "./each.mjs";
import { summation } from "./summation.mjs";
import { emoji_chart } from "./emoji_chart.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
export function app_language_2_refresh_stats(context) {
  app_language_2_button_back_home(context);
  let { root, app_fn } = context;
  let factors = app_language_2_factor_get(context);
  html_p_text(
    root,
    string_combine_multiple([
      emoji_chart(),
      " Factors: ",
      list_join_comma_space(list_map(factors, app_language_2_factor_string)),
    ]),
  );
  let stats = app_language_2_stats_get(app_fn);
  let ss = ["right", "wrong"];
  let total = summation((c) => {
    each(ss, (s) => {
      let r = object_property_get(stats, s);
      each_object_values(r, (value) => {
        c(value);
      });
    });
  });
  html_p_text(root, string_combine_multiple(["Overall total: ", total]));
  let closest = {};
  let gaps = app_language_2_gaps_get(context);
  summation((c) => {
    each(ss, (s) => {
      let r = object_property_get(stats, s);
      let s_upper_first = string_case_upper_first(s);
      html_p_text(root, s_upper_first);
      let s_total = summation((c2) => {
        each_object(r, (key, value) => {
          c2(value);
          html_div_text(
            root,
            string_combine_multiple(["Gap-", key, ": ", value]),
          );
          let c3 = list_closest(gaps, integer_parse(key));
          let c4 = object_property_initialize(closest, c3, {});
          object_property_add(c4, s, value);
        });
      });
      c(s_total);
      html_p_text(
        root,
        string_combine_multiple([
          s_upper_first,
          " total: ",
          s_total,
          number_format_percent(s_total, total),
        ]),
      );
    });
  });
  html_p_text(root, "Totals rounded to the nearest gap: ");
  each_object(closest, (gap, rw) => {
    gap = integer_parse(gap);
    let total2 = summation((c) => {
      each_object_values(rw, (v) => {
        c(v);
      });
    });
    each(ss, (s) => {
      let v;
      if (object_property_exists(rw, s)) {
        v = object_property_get(rw, s);
      } else {
        v = 0;
      }
      html_div_text(
        root,
        string_combine_multiple([
          "Gap-",
          gap,
          " ",
          s,
          " ",
          v,
          "/",
          total2,
          number_format_percent(v, total2),
        ]),
      );
    });
  });
  html_button_reset(root, () => {
    storage_local_set(app_fn, "stats", app_language_2_stats_initial());
    app_language_2_refresh_stats(context);
  });
  if (storage_local_exists(app_fn, "count")) {
    let cnt = storage_local_get(app_fn, "count");
    html_p_text(root, string_combine_multiple(["Grand total answered: ", cnt]));
  }
  if (storage_local_exists(app_fn, "count_wrong")) {
    let cnt_wrong = storage_local_get(app_fn, "count_wrong");
    let count_right = cnt - cnt_wrong;
    html_p_text(
      root,
      string_combine_multiple([
        "Grand total right: ",
        count_right,
        number_format_percent(count_right, cnt),
      ]),
    );
    html_p_text(
      root,
      string_combine_multiple([
        "Grand total wrong: ",
        cnt_wrong,
        number_format_percent(cnt_wrong, cnt),
      ]),
    );
  }
}
