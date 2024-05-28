import { html_img } from "./html_img.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_dev_screen_command_line() {
  return {
    name: function command_line_name(root) {
      return html_span_text(root, "command_line");
    },
    screen: function command_line_screen(root) {
      html_img;
    },
  };
}
