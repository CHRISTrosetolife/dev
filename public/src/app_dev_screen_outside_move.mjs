import { html_style_alternate_monospace_short } from "./html_style_alternate_monospace_short.mjs";
import { app_dev_p_transformer } from "./app_dev_p_transformer.mjs";
import { js_outside_move } from "./js_outside_move.mjs";
import { app_dev_screen_img } from "./app_dev_screen_img.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_dev_screen_outside_move() {
  return {
    name: function outside_move_name(root) {
      return html_span_text(root, "outside_move");
    },
    screen: function outside_move_screen(root) {
      let i = 1;
      html_style_alternate_monospace_short(
        root,
        "if we have `function`s in the module scope ...",
      );
      app_dev_screen_img(app_dev_screen_outside_move, root, i++);
      let fn = js_outside_move;
      app_dev_p_transformer(root, fn);
      html_style_alternate_monospace_short(
        root,
        "... then the functions will be removed from the file ...",
      );
      app_dev_screen_img(app_dev_screen_outside_move, root, i++);
      app_dev_screen_img(app_dev_screen_outside_move, root, i++);
      app_dev_screen_img(app_dev_screen_outside_move, root, i++);
      app_dev_screen_img(app_dev_screen_outside_move, root, i++);
    },
  };
}
