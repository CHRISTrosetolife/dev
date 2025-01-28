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
    string_combine_multiple([" Learn"]),
    async () => {
      await app_language2_refresh_learn(context);
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
  html_button_width_full_text_click(
    root,
    string_combine_multiple([emoji_chart(), " Factor"]),
    () => {
      app_language2_refresh_factor(context);
    },
  );
}
