import { app_language2_skip_manual_get } from "./app_language2_skip_manual_get.mjs";
import { app_language2_refresh_learn } from "./app_language2_refresh_learn.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { emoji_delete } from "./emoji_delete.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { html_spacer_vertical_n } from "./html_spacer_vertical_n.mjs";
export function app_language2_skip(root, word, app_fn, context) {
  let root2 = object_property_get(context, "root");
  let app_fn2 = object_property_get(context, "app_fn");
  let skip_manual = app_language2_skip_manual_get(app_fn);
  html_spacer_vertical_n(root, 6);
  html_button_width_full_text_click(
    root,
    string_combine_multiple([emoji_delete(), " Skip"]),
    async () => {
      let word_key = object_property_get(word, "key");
      object_property_set(skip_manual, word_key, true);
      storage_local_set(app_fn, "skip_manual", skip_manual);
      await app_language2_refresh_learn(context);
    },
  );
}
