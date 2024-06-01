import { app_dev_screen_img } from "./app_dev_screen_img.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_dev_screen_imports_fix() {
  return {
    name: function imports_fix_name(root) {
      return html_span_text(root, "imports_fix");
    },
    screen: function imports_fix_screen(root) {
      let i = 1;
      app_dev_screen_img(app_dev_screen_imports_fix, root, i++);
    },
  };
}
