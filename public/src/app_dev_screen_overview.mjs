import { html_style_alternate_monospace_short_multiple } from "./html_style_alternate_monospace_short_multiple.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_dev_screen_overview() {
  return {
    name: function overview_name(root) {
      return html_span_text(root, "overview");
    },
    screen: function overview_screen(root) {
      html_style_alternate_monospace_short_multiple(root, [
        "to keep the programming simple , `function`s are the basic building block , rather than classes or object-oriented programming",
      ]);
    },
  };
}
