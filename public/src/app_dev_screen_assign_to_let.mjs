import { app_dev_p_transformer } from "./app_dev_p_transformer.mjs";
import { js_assign_to_let } from "./js_assign_to_let.mjs";
import { app_dev_screen_img } from "./app_dev_screen_img.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_dev_screen_assign_to_let() {
  return {
    name: function assign_to_let_name(root) {
      return html_span_text(root, "adding `let` to variable assignments");
    },
    screen: function assign_to_let_screen(root) {
      let i = 1;
      app_dev_screen_img(app_dev_screen_assign_to_let, root, i++);
      ("if a variable is assigned a value , but `let` and `var` are not used ...");
      let fn = js_assign_to_let;
      app_dev_p_transformer(root, fn);
    },
  };
}
