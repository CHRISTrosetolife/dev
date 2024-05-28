import { path_join } from "./path_join.mjs";
import { app_dev } from "./app_dev.mjs";
import { app_name } from "./app_name.mjs";
import { app_dev_screen_prefix } from "./app_dev_screen_prefix.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
import { html_img } from "./html_img.mjs";
import { html_span_text } from "./html_span_text.mjs";
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
      html_img(root, path_join([app_name(app_dev), name, "1.png"]));
    },
  };
}
