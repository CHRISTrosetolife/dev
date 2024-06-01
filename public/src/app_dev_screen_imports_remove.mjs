import { app_dev_p_transformer } from "./app_dev_p_transformer.mjs";
import { html_style_alternate_monospace_short } from "./html_style_alternate_monospace_short.mjs";
import { html_style_alternate_monospace_short_span } from "./html_style_alternate_monospace_short_span.mjs";
import { app_dev_screen_img } from "./app_dev_screen_img.mjs";
import { js_imports_remove } from "./js_imports_remove.mjs";
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
      html_style_alternate_monospace_short(
        root,
        "if we have an `import` that is not being used ...",
      );
      app_dev_screen_img(app_dev_screen_imports_remove, root, i++);
      app_dev_p_transformer(root, js_imports_remove.name);
      app_dev_screen_img(app_dev_screen_imports_remove, root, i++);
      app_dev_screen_img(app_dev_screen_imports_remove, root, i++);
    },
  };
}
