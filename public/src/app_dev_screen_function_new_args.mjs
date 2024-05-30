import { app_dev_screen_function_new } from "./app_dev_screen_function_new.mjs";
import { app_dev_screen_img } from "./app_dev_screen_img.mjs";
import { app_learn_code_style_code_colored } from "./app_learn_code_style_code_colored.mjs";
import { noop } from "./noop.mjs";
import { html_style_function_name } from "./html_style_function_name.mjs";
import { html_style_alternate_short_p } from "./html_style_alternate_short_p.mjs";
import { html_style_alternate_monospace_short_span } from "./html_style_alternate_monospace_short_span.mjs";
export function app_dev_screen_function_new_args() {
  return {
    name: function function_new_name(root) {
      return html_style_alternate_monospace_short_span(
        root,
        "add new `function` with parameters",
      );
    },
    screen: function function_new_args_screen(root) {
      html_style_alternate_short_p(
        root,
        [html_style_function_name, noop, app_learn_code_style_code_colored],
        "function_new` adds a new `function` with parameters",
      );
      ("suppose we want to add a `function` named `greet_person` with two parameters : `first_name` and `last_name`");
      ("here is the command :");
      let i = 1;
      app_dev_screen_img(app_dev_screen_function_new, root, i++);
    },
  };
}
