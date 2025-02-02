import { storage_local_get } from "./storage_local_get.mjs";
import { html_buttons_choices } from "./html_buttons_choices.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { app_language_2_button_back_home } from "./app_language_2_button_back_home.mjs";
import { emoji_setting } from "./emoji_setting.mjs";
import { app_language_2_reset } from "./app_language_2_reset.mjs";
import { html_button_reset } from "./html_button_reset.mjs";
import { html_button_me_email } from "./html_button_me_email.mjs";
import { app_language_2_skipped } from "./app_language_2_skipped.mjs";
import { app_language_2_skip_manual_get } from "./app_language_2_skip_manual_get.mjs";
import { app_language_2_refresh_stats } from "./app_language_2_refresh_stats.mjs";
import { app_language_2_refresh_learn } from "./app_language_2_refresh_learn.mjs";
import { app_language_2_refresh_factor } from "./app_language_2_refresh_factor.mjs";
import { app_language_2_refresh_data } from "./app_language_2_refresh_data.mjs";
import { object_properties_empty_not_is } from "./object_properties_empty_not_is.mjs";
import { emoji_delete } from "./emoji_delete.mjs";
import { emoji_learn } from "./emoji_learn.mjs";
import { emoji_data } from "./emoji_data.mjs";
import { emoji_chart } from "./emoji_chart.mjs";
import { emoji_laptop } from "./emoji_laptop.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { storage_local_exists } from "./storage_local_exists.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
export function app_language_2_refresh_home(context) {
  let { root, app_fn } = context;
  html_clear_scroll_top_centered(root);
  html_button_width_full_text_click(
    root,
    string_combine_multiple([emoji_learn(), " Learn"]),
    async () => {
      await app_language_2_refresh_learn(context);
    },
  );
  html_button_width_full_text_click(
    root,
    string_combine_multiple([emoji_chart(), " Factor (difficulty)"]),
    () => {
      app_language_2_refresh_factor(context);
    },
  );
  html_button_width_full_text_click(
    root,
    string_combine_multiple([emoji_setting(), " Settings"]),
    () => {
      app_language_2_button_back_home(context);
      let { root, app_fn } = context;
      html_p_text(root, "How many answers do you want to see?");
      html_buttons_choices(
        root,
        factor_choices,
        (count) => storage_local_set(app_fn, "answer_count", count),
        storage_local_get(app_fn, "answer_count"),
      );
    },
  );
  let skip_manual = app_language_2_skip_manual_get(app_fn);
  if (object_properties_empty_not_is(skip_manual)) {
    html_button_width_full_text_click(
      root,
      string_combine_multiple([emoji_delete(), " Skipped"]),
      () => {
        app_language_2_skipped(context);
      },
    );
  }
  if (storage_local_exists(app_fn, "stats")) {
    html_button_width_full_text_click(
      root,
      string_combine_multiple([emoji_data(), " Stats"]),
      () => {
        app_language_2_refresh_stats(context);
      },
    );
  }
  html_button_width_full_text_click(
    root,
    string_combine_multiple([emoji_laptop(), " Data for development"]),
    () => {
      app_language_2_refresh_data(context);
    },
  );
  html_button_me_email(root);
  html_button_reset(root, () => {
    app_language_2_reset(context);
  });
}
