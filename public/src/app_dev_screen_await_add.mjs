import { app_dev_p_transformer_generic } from "./app_dev_p_transformer_generic.mjs";
import { js_await_add } from "./js_await_add.mjs";
import { sleep } from "./sleep.mjs";
import { html_style_link_code } from "./html_style_link_code.mjs";
import { url_secure } from "./url_secure.mjs";
import { string_combine } from "./string_combine.mjs";
import { html_style_function_name } from "./html_style_function_name.mjs";
import { noop } from "./noop.mjs";
import { html_style_alternate_short_p } from "./html_style_alternate_short_p.mjs";
import { timeout_set } from "./timeout_set.mjs";
import { app_dev_screen_img } from "./app_dev_screen_img.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_learn_code_style_code_colored } from "./app_learn_code_style_code_colored.mjs";
export function app_dev_screen_await_add() {
  return {
    name: function await_add_name(root) {
      return html_span_text(root, "await_add");
    },
    screen: function await_add_screen(root) {
      let i = 1;
      let url = string_combine(
        url_secure(),
        "developer.mozilla.org/en-US/docs/Web/API/setTimeout",
      );
      html_style_alternate_short_p(
        root,
        [
          noop,
          html_style_function_name,
          noop,
          app_learn_code_style_code_colored,
          noop,
          html_style_link_code(url),
        ],
        "`" + timeout_set.name + "` is a `function` that calls `setTimeout` :",
      );
      app_dev_screen_img(app_dev_screen_await_add, root, i++);
      html_style_alternate_short_p(
        root,
        [
          noop,
          html_style_function_name,
          noop,
          app_learn_code_style_code_colored,
          noop,
          html_style_function_name,
        ],
        "`" +
          sleep.name +
          "` is a `function` that calls `" +
          timeout_set.name +
          "` :",
      );
      app_dev_screen_img(app_dev_screen_await_add, root, i++);
      html_style_alternate_short_p(
        root,
        [
          noop,
          app_learn_code_style_code_colored,
          noop,
          html_style_function_name,
          noop,
          html_style_function_name,
          noop,
          html_style_function_name,
        ],
        "if we have a `function` that calls `" +
          sleep.name +
          "` , then normally we would have to type out `await` and `async` :",
      );
      app_dev_screen_img(app_dev_screen_await_add, root, i++);
      let fn = js_await_add;
      app_dev_p_transformer_generic(root, fn, "instead , if");
    },
  };
}
