import { html_cycle_monospace_multiple } from "./html_cycle_monospace_multiple.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_dev_screen_overview() {
  return {
    name: function overview_name(root) {
      return html_span_text(root, "overview");
    },
    screen: function overview_screen(root) {
      html_cycle_monospace_multiple(root, [
        "one goal was that a recent college or bootcamp graduate could get started quickly",
        "rather than experts-only , be beginner-friendly",
        "with a larger candidate pool , an employer can find developers easier",
        "therefore the code should favor simplicity",
        "to keep the programming simple , `function`s are the basic building block , rather than classes or object-oriented programming",
      ]);
    },
  };
}
