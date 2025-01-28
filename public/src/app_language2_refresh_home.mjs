import { html_style_display_none } from "./html_style_display_none.mjs";
import { html_div } from "./html_div.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { object_property_delete } from "./object_property_delete.mjs";
import { app_language2_word_key } from "./app_language2_word_key.mjs";
import { json_to } from "./json_to.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { each } from "./each.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_language2_skip_manual_get } from "./app_language2_skip_manual_get.mjs";
import { object_values } from "./object_values.mjs";
import { app_language2_button_back_home } from "./app_language2_button_back_home.mjs";
import { emoji_learn } from "./emoji_learn.mjs";
import { app_language2_refresh_factor } from "./app_language2_refresh_factor.mjs";
import { app_language2_refresh_data } from "./app_language2_refresh_data.mjs";
import { app_language2_refresh_stats } from "./app_language2_refresh_stats.mjs";
import { emoji_data } from "./emoji_data.mjs";
import { emoji_chart } from "./emoji_chart.mjs";
import { emoji_laptop } from "./emoji_laptop.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { storage_local_exists } from "./storage_local_exists.mjs";
import { app_language2_refresh_learn } from "./app_language2_refresh_learn.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export function app_language2_refresh_home(context) {
  let { root, app_fn } = context;
  html_clear_scroll_top_centered(root);
  html_button_width_full_text_click(
    root,
    string_combine_multiple([emoji_learn(), " Learn"]),
    async () => {
      await app_language2_refresh_learn(context);
    },
  );
  html_button_width_full_text_click(
    root,
    string_combine_multiple([emoji_chart(), " Difficulty"]),
    () => {
      app_language2_refresh_factor(context);
    },
  );
  html_button_width_full_text_click(
    root,
    string_combine_multiple([" Skipped"]),
    () => {
      app_language2_button_back_home(context);
      let { root, words } = context;
      let values_all = object_values(words);
      let skip_manual = app_language2_skip_manual_get(app_fn);
      let values_skip_manual = list_filter(values_all, (v) =>
        object_property_exists(skip_manual, app_language2_word_key(v)),
      );
      html_p_text(root, "Choose a word pair to no longer skip it");
      each(values_skip_manual, (v) => {
        let entry = html_div(root);
        html_p_text(entry, json_to(v));
        html_button_width_full_text_click(
          entry,
          string_combine_multiple(["Unskip"]),
          () => {
            let word_key = app_language2_word_key(v);
            object_property_delete(skip_manual, word_key);
            storage_local_set(app_fn, "skip_manual", skip_manual);
            html_style_display_none(entry);
          },
        );
      });
    },
  );
  if (storage_local_exists(app_fn, "stats")) {
    html_button_width_full_text_click(
      root,
      string_combine_multiple([emoji_data(), " Stats"]),
      () => {
        app_language2_refresh_stats(context);
      },
    );
  }
  html_button_width_full_text_click(
    root,
    string_combine_multiple([emoji_laptop(), " Data for development"]),
    () => {
      app_language2_refresh_data(context);
    },
  );
}
