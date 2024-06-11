import { html_style_alternate_monospace_short_span } from "./html_style_alternate_monospace_short_span.mjs";
import { app_dev_screen_img } from "./app_dev_screen_img.mjs";
export function app_dev_screen_if_to_block() {
  return {
    name: function if_to_block_name(root) {
      return html_style_alternate_monospace_short_span(
        root,
        "changing `if` statements to blocks",
      );
    },
    screen: function if_to_block_screen(root) {
      "if there is an `if` statement ...";
      let i = 1;
      app_dev_screen_img(app_dev_screen_if_to_block, root, i++);
    },
  };
}
