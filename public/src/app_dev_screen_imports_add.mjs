import { html_style_alternate_monospace_short_span } from "./html_style_alternate_monospace_short_span.mjs";
export function app_dev_screen_imports_add() {
  return {
    name: function imports_add_name(root) {
      return html_style_alternate_monospace_short_span(
        root,
        "add missing `import`s",
      );
    },
    screen: function imports_add_screen(root) {
      "suppose we have a function that calls another function :";
    },
  };
}
