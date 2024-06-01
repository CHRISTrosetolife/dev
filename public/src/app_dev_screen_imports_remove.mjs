import { app_dev_screen_img } from "./app_dev_screen_img.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_dev_screen_imports_remove() {
  return {
    name: function imports_remove_name(root) {
      return html_span_text(root, "imports_remove");
    },
    screen: function imports_remove_screen(root) {
      let i = 1;
      app_dev_screen_img(app_dev_screen_imports_remove, root, i++);
    },
  };
}
