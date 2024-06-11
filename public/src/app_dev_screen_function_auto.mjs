import { html_cycle_function_name } from "./html_cycle_function_name.mjs";
import { app_dev_screen_img } from "./app_dev_screen_img.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_dev_screen_function_auto() {
  return {
    name: function function_auto_name(root) {
      return html_span_text(root, "function_auto");
    },
    screen: function function_auto_screen(root) {
      "so far many `function`s have been shown that refactor code";
      html_cycle_function_name(
        root,
        "`function_auto` performs all these refactors at once",
      );
      let i = 1;
      app_dev_screen_img(app_dev_screen_function_auto, root, i++);
    },
  };
}
