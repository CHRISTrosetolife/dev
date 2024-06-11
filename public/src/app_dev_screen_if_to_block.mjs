import { html_cycle_monospace } from "./html_cycle_monospace.mjs";
import { html_cycle_monospace_span } from "./html_cycle_monospace_span.mjs";
import { app_dev_p_transformer } from "./app_dev_p_transformer.mjs";
import { js_if_to_block } from "./js_if_to_block.mjs";
import { app_dev_screen_img } from "./app_dev_screen_img.mjs";
export function app_dev_screen_if_to_block() {
  return {
    name: function if_to_block_name(root) {
      return html_cycle_monospace_span(
        root,
        "changing `if` statements to blocks",
      );
    },
    screen: function if_to_block_screen(root) {
      "the google javascript style guide , for example , generally requires that `if` statements be blocks";
      html_cycle_monospace(
        root,
        "if there is an `if` statement that is not a block ...",
      );
      let i = 1;
      app_dev_screen_img(app_dev_screen_if_to_block, root, i++);
      let fn = js_if_to_block;
      app_dev_p_transformer(root, fn);
      app_dev_screen_img(app_dev_screen_if_to_block, root, i++);
      html_cycle_monospace(
        root,
        "... then the statement will change to a block :",
      );
      app_dev_screen_img(app_dev_screen_if_to_block, root, i++);
    },
  };
}
