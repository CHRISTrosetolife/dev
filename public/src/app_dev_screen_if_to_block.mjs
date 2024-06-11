import { app_dev_screen_img } from "./app_dev_screen_img.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_dev_screen_if_to_block() {
  return {
    name: function if_to_block_name(root) {
      return html_span_text(root, "changing `if` statements to blocks");
    },
    screen: function if_to_block_screen(root) {
      let i = 1;
      app_dev_screen_img(app_dev_screen_if_to_block, root, i++);
    },
  };
}
