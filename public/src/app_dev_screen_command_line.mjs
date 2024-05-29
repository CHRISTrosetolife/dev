import { html_inner_get } from "./html_inner_get.mjs";
import { html_style_alternate_short } from "./html_style_alternate_short.mjs";
import { html_img_limited_centered } from "./html_img_limited_centered.mjs";
import { path_join } from "./path_join.mjs";
import { app_dev } from "./app_dev.mjs";
import { app_name } from "./app_name.mjs";
import { app_dev_screen_prefix } from "./app_dev_screen_prefix.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_p } from "./html_p.mjs";
import { noop } from "./noop.mjs";
export function app_dev_screen_command_line() {
  let name = string_prefix_without(
    app_dev_screen_command_line.name,
    app_dev_screen_prefix(),
  );
  return {
    name: function command_line_name(root) {
      return html_span_text(root, "command_line");
    },
    screen: function command_line_screen(root) {
      html_style_alternate_short(
        root,
        html_p,
        [
          (e) => {
            let text = html_inner_get(e);
          },
          noop,
        ],
        "string_combine` is a function that concatenates two strings",
      );
      html_img_limited_centered(
        root,
        path_join([app_name(app_dev), name, "1.png"]),
      );
    },
  };
}
