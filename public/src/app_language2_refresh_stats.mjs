import { emoji_danger } from "./emoji_danger.mjs";
import { app_language2_factor_get } from "./app_language2_factor_get.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
import { storage_local_exists } from "./storage_local_exists.mjs";
import { app_language2_stats_initial } from "./app_language2_stats_initial.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { number_max } from "./number_max.mjs";
import { round_2 } from "./round_2.mjs";
import { object_property_add } from "./object_property_add.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { integer_parse } from "./integer_parse.mjs";
import { list_closest } from "./list_closest.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { each_object } from "./each_object.mjs";
import { app_language2_gaps_get } from "./app_language2_gaps_get.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { each_object_values } from "./each_object_values.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { each } from "./each.mjs";
import { summation } from "./summation.mjs";
import { app_language2_stats_get } from "./app_language2_stats_get.mjs";
import { app_language2_button_back_home } from "./app_language2_button_back_home.mjs";
export function app_language2_refresh_stats(context) {
  app_language2_button_back_home(context);
  let { root, app_fn } = context;
  let factor = app_language2_factor_get(context);
  html_p_text(root, string_combine_multiple(["factor: ", factor]));
  let stats = app_language2_stats_get(app_fn);
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
  let gaps = app_language2_gaps_get(context);
  summation((c) => {
    each(ss, (s) => {
      let r = object_property_get(stats, s);
      html_p_text(root, s);
      let s_total = summation((c2) => {
        each_object(r, (key, value) => {
          c2(value);
          html_div_text(root, string_combine_multiple([key, ": ", value]));
          let c3 = list_closest(gaps, integer_parse(key));
          let c4 = object_property_initialize(closest, c3, {});
          object_property_add(c4, s, value);
        });
      });
      c(s_total);
      html_p_text(
        root,
        string_combine_multiple([
          s,
          " total: ",
          s_total,
          " (",
          round_2((s_total / number_max(total, 1)) * 100),
          "%)",
        ]),
      );
    });
  });
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
          "gap",
          gap,
          " ",
          s,
          " ",
          v,
          "/",
          total2,
          " (",
          round_2((v / number_max(total2, 1)) * 100),
          "%)",
        ]),
      );
    });
  });
  html_button_width_full_text_click(
    root,
    string_combine_multiple([emoji_danger(), " Reset"]),
    () => {
      storage_local_set(app_fn, "stats", app_language2_stats_initial());
      app_language2_refresh_stats(context);
    },
  );
  if (storage_local_exists(app_fn, "count")) {
    let cnt = storage_local_get(app_fn, "count");
    html_p_text(root, string_combine_multiple(["Count: ", cnt]));
  }
}
