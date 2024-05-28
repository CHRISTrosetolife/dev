import { app_dev } from "./app_dev.mjs";
import { app_name } from "./app_name.mjs";
import { app_dev_screen_prefix } from "./app_dev_screen_prefix.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
import { html_img } from "./html_img.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
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
      html_img(root, string_combine_multiple([app_name(app_dev)]));
    },
  };
}
