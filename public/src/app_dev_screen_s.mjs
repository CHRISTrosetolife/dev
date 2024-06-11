import { app_dev_screen_img } from "./app_dev_screen_img.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_dev_screen_s() {
  return {
    name: function s_name(root) {
      return html_span_text(root, "s");
    },
    screen: function s_screen(root) {
      let i = 1;
      app_dev_screen_img(app_dev_screen_s, root, i++);
    },
  };
}
