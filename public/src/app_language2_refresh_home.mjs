import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { each_object } from "./each_object.mjs";
import { storage_local_exists } from "./storage_local_exists.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { list_take } from "./list_take.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_language2_word_index } from "./app_language2_word_index.mjs";
import { list_sort } from "./list_sort.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { object_values } from "./object_values.mjs";
import { app_language2_gaps_update } from "./app_language2_gaps_update.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { app_language2_factor_get } from "./app_language2_factor_get.mjs";
import { range_from } from "./range_from.mjs";
import { each } from "./each.mjs";
import { app_language2_refresh_learn } from "./app_language2_refresh_learn.mjs";
import { html_button_back } from "./html_button_back.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
import { list_map } from "./list_map.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { html_style_success } from "./html_style_success.mjs";
export function app_language2_refresh_home(context) {
  let { root, app_fn } = context;
  html_clear_scroll_top_centered(root);
  html_button_back(root, async () => {
    await app_language2_refresh_learn(context);
  });
  if (storage_local_exists(app_fn, "stats")) {
    html_button_width_full_text_click(root, "stats", () => {
      let { root } = context;
      html_clear_scroll_top_centered(root);
      html_button_back(root, async () => {
        app_language2_refresh_home(context);
      });
      let stats = storage_local_get(app_fn, "stats");
      let ss = ["right", "wrong"];
      let right = object_property_get(stats, "right");
      html_p_text(root, "right");
      each_object(right, (key, value) => {
        html_div_text(root, string_combine_multiple([key, ": ", value]));
      });
      let wrong = object_property_get(stats, "wrong");
      html_p_text(root, "wrong");
      each_object(wrong, (key, value) => {
        html_div_text(root, string_combine_multiple([key, ": ", value]));
      });
    });
  }
  html_button_width_full_text_click(root, "values", () => {
    let { root, words } = context;
    html_clear_scroll_top_centered(root);
    html_button_back(root, async () => {
      app_language2_refresh_home(context);
    });
    let values_all = object_values(words);
    let values = list_filter_property(values_all, "skip", false);
    list_sort(values, app_language2_word_index);
    each(list_take(values, 200), (item) => {
      html_div_text(root, json_format_to(item));
    });
  });
  html_p_text(
    root,
    "The gap of a word pair relates to the number of other word pairs you see before seeing the same word pair again. The factor is the rate at which a gap increases. The lower the factor, the easier the app is. The higher the factor, the more difficult the app is. Choose a factor:",
  );
  let n = range_from(11, 30);
  let factors = list_map(n, (i) => i / 10);
  let factor = app_language2_factor_get(context);
  each(factors, (f) => {
    let b = html_button_width_full_text_click(root, f, () => {
      let app_fn = object_property_get(context, "app_fn");
      storage_local_set(app_fn, "factor", f);
      app_language2_gaps_update(context);
      app_language2_refresh_home(context);
    });
    if (f === factor) {
      html_style_success(b);
    }
  });
}
