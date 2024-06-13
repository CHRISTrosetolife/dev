import { html_cycle_code_span } from "./html_cycle_code_span.mjs";
import { app_dev_screen_img } from "./app_dev_screen_img.mjs";
export function app_dev_screen_rename() {
  return {
    name: function rename_name(root) {
      return html_cycle_code_span(
        root,
        "renaming a `function` or multiple `function`s at once",
      );
    },
    screen: function rename_screen(root) {
      let i = 1;
      app_dev_screen_img(app_dev_screen_rename, root, i++);
    },
  };
}
