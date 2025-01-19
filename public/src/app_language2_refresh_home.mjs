import { storage_local_initialize } from "./storage_local_initialize.mjs";
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
  let { root } = context;
  html_clear_scroll_top_centered(root);
  html_button_back(root, async () => {
    await app_language2_refresh_learn(context);
  });
  let n = range_from(11, 30);
  let factors = list_map(n, (i) => i / 10);
  let factor = app_language2_factor_get(context);
  each(factors, (f) => {
    let b = html_button_width_full_text_click(root, f, () => {
      let app_fn = object_property_get(context, "app_fn");
      storage_local_initialize(app_fn, "factor", f);
      app_language2_refresh_home(context);
    });
    if (f === factor) {
      html_style_success(b);
    }
  });
}
