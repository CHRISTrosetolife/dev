import { app_dev_screen_img } from "./app_dev_screen_img.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_dev_screen_rename() {
  return {
    name: function rename_name(root) {
      return html_span_text(
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
