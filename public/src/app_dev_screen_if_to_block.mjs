import { html_style_alternate_monospace_short } from "./html_style_alternate_monospace_short.mjs";
import { app_dev_p_transformer } from "./app_dev_p_transformer.mjs";
import { js_if_to_block } from "./js_if_to_block.mjs";
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
      html_style_alternate_monospace_short(
        root,
        "if there is an `if` statement ...",
      );
      let i = 1;
      app_dev_screen_img(app_dev_screen_if_to_block, root, i++);
      let fn = js_if_to_block;
      app_dev_p_transformer(root, fn);
    },
  };
}
