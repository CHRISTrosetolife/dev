import { html_span_text } from "./html_span_text.mjs";
export function app_dev_screen_imports_add() {
  return {
    name: function imports_add_name(root) {
      return html_span_text(root, "add missing `import`s");
    },
    screen: function imports_add_screen(root) {},
  };
}
