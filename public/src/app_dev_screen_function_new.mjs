import { html_style_function_name } from "./html_style_function_name.mjs";
import { noop } from "./noop.mjs";
import { html_style_alternate_short_p } from "./html_style_alternate_short_p.mjs";
import { app_dev_screen_img } from "./app_dev_screen_img.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_dev_screen_function_new() {
  return {
    name: function function_new_name(root) {
      return html_span_text(root, "`function` that adds a new `function`");
    },
    screen: function function_new_screen(root) {
      html_style_alternate_short_p(
        root,
        [noop, html_style_function_name],
        "`function_new` adds a new `function`",
      );
      let i = 1;
      app_dev_screen_img(app_dev_screen_function_new, root, i++);
      [
        "a file is created for the `function`",
        "the name of the file is the name of the function",
        "the `function` is `export`ed",
        "then the newly-created function is opened in visual studio code",
      ];
      app_dev_screen_img(app_dev_screen_function_new, root, i++);
    },
  };
}
