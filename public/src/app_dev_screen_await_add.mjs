import { url_secure } from "./url_secure.mjs";
import { string_combine } from "./string_combine.mjs";
import { html_style_function_name } from "./html_style_function_name.mjs";
import { noop } from "./noop.mjs";
import { html_style_alternate_short_p } from "./html_style_alternate_short_p.mjs";
import { timeout_set } from "./timeout_set.mjs";
import { app_dev_screen_img } from "./app_dev_screen_img.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_style_link } from "./html_style_link.mjs";
export function app_dev_screen_await_add() {
  return {
    name: function await_add_name(root) {
      return html_span_text(root, "await_add");
    },
    screen: function await_add_screen(root) {
      let i = 1;
      app_dev_screen_img(app_dev_screen_await_add, root, i++);
      html_style_alternate_short_p(
        root,
        [
          noop,
          html_style_function_name,
          noop,
          html_style_link(
            string_combine(
              url_secure(),
              "developer.mozilla.org/en-US/docs/Web/API/setTimeout",
            ),
          ),
        ],
        "`" + timeout_set.name + "` is a function that calls `setTimeout",
      );
    },
  };
}
