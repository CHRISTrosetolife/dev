import { range_from } from "./range_from.mjs";
import { each } from "./each.mjs";
import { app_language2_refresh_learn } from "./app_language2_refresh_learn.mjs";
import { html_button_back } from "./html_button_back.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
import { list_map } from "./list_map.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export function app_language2_refresh_home(context) {
  let { root } = context;
  html_clear_scroll_top_centered(root);
  html_button_back(root, async () => {
    await app_language2_refresh_learn(context);
  });
  let n = range_from(11, 30);
  let factors = list_map(n, (i) => i / 10);
  each(factors, (factor) => {
    html_button_width_full_text_click(root, factor, () => {});
  });
}
