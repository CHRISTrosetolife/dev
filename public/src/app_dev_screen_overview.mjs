import { html_p_text } from "./html_p_text.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_dev_screen_overview() {
  return {
    name: function overview_name(root) {
      return html_span_text(root, "overview");
    },
    screen: function overview_screen(root) {
      html_p_text(
        root,
        "to keep the programming simple , functions are the basic building block , rather than classes or object-oriented programming",
      );
    },
  };
}
