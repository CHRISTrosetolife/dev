import { html_style_alternate_monospace_short_span } from "./html_style_alternate_monospace_short_span.mjs";
import { app_dev_screen_img } from "./app_dev_screen_img.mjs";
export function app_dev_screen_imports_remove() {
  return {
    name: function imports_remove_name(root) {
      return html_style_alternate_monospace_short_span(
        root,
        "remove unused `import`s",
      );
    },
    screen: function imports_remove_screen(root) {
      let i = 1;
      app_dev_screen_img(app_dev_screen_imports_remove, root, i++);
    },
  };
}
