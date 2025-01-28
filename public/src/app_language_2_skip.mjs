import { app_language_2_skip_text } from "./app_language_2_skip_text.mjs";
import { app_language_2_skip_manual_get } from "./app_language_2_skip_manual_get.mjs";
import { app_language_2_refresh_learn } from "./app_language_2_refresh_learn.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { html_spacer_vertical_n } from "./html_spacer_vertical_n.mjs";
export function app_language_2_skip(context, word) {
  let root = object_property_get(context, "root");
  let app_fn = object_property_get(context, "app_fn");
  let skip_manual = app_language_2_skip_manual_get(app_fn);
  html_spacer_vertical_n(root, 6);
  html_button_width_full_text_click(
    root,
    app_language_2_skip_text(),
    async () => {
      let word_key = object_property_get(word, "key");
      object_property_set(skip_manual, word_key, true);
      storage_local_set(app_fn, "skip_manual", skip_manual);
      await app_language_2_refresh_learn(context);
    },
  );
}
