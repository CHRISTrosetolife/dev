import { html_style_code } from "./html_style_code.mjs";
import { noop } from "./noop.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { html_cycle_code_span } from "./html_cycle_code_span.mjs";
import { app_dev_p_transformer } from "./app_dev_p_transformer.mjs";
import { js_if_to_block } from "./js_if_to_block.mjs";
import { app_dev_screen_img } from "./app_dev_screen_img.mjs";
import { html_cycle_p } from "./html_cycle_p.mjs";
import { html_style_link } from "./html_style_link.mjs";
export function app_dev_screen_if_to_block() {
  return {
    name: function if_to_block_name(root) {
      return html_cycle_code_span(root, "changing `if` statements to blocks");
    },
    screen: function if_to_block_screen(root) {
      html_cycle_p(
        root,
        [
          noop,
          html_style_link(
            `https://google.github.io/styleguide/jsguide.html#formatting-braces-all`,
          ),
          noop,
          html_style_code,
        ],
        "the `google javascript style guide` , for example , generally requires that `if` statements be blocks",
      );
      html_cycle_code(
        root,
        "if there is an `if` statement that is not a block ...",
      );
      let i = 1;
      app_dev_screen_img(app_dev_screen_if_to_block, root, i++);
      let fn = js_if_to_block;
      app_dev_p_transformer(root, fn);
      app_dev_screen_img(app_dev_screen_if_to_block, root, i++);
      html_cycle_code(root, "... then the statement will change to a block :");
      app_dev_screen_img(app_dev_screen_if_to_block, root, i++);
    },
  };
}
