import { html_button_back } from "./html_button_back.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
export function app_language2_refresh_home(context) {
  let { root } = context;
  html_clear_scroll_top_centered(root);
  html_button_back(root, () => {
    app_language2_refresh_home(context);
  });
}
