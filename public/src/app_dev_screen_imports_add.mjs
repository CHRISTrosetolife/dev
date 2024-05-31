import { js_imports_add } from "./js_imports_add.mjs";
import { function_transform } from "./function_transform.mjs";
import { app_dev_screen_img } from "./app_dev_screen_img.mjs";
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
      "if we have a `function` that calls another `function` ...";
      let i = 1;
      app_dev_screen_img(app_dev_screen_imports_add, root, i++);
      "... and we run `" +
        function_transform.name +
        "` and pass in `" +
        js_imports_add +
        "` and the name of the function ...";
      app_dev_screen_img(app_dev_screen_imports_add, root, i++);
      ("... then any missing `import`s will be added");
      app_dev_screen_img(app_dev_screen_imports_add, root, i++);
    },
  };
}
