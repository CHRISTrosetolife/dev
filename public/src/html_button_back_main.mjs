import { html_button_back } from "./html_button_back.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
export function html_button_back_main(context, app_main_lambda) {
  let { root } = context;
  html_clear_scroll_top(root);
  html_button_back(root, () => {
    app_main_lambda(context);
  });
  return root;
}
