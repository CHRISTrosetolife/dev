import { app_dev_screen_img } from "./app_dev_screen_img.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_dev_screen_await_add() {
  return {
    name: function await_add_name(root) {
      return html_span_text(root, "await_add");
    },
    screen: function await_add_screen(root) {
      let i = 1;
      app_dev_screen_img(app_dev_screen_await_add, root, i++);
    },
  };
}
