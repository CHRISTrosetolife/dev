import { js_code_export_function_declare } from "./js_code_export_function_declare.mjs";
import { app_dev_sandbox_function } from "./app_dev_sandbox_function.mjs";
import { html_style_function_name } from "./html_style_function_name.mjs";
import { noop } from "./noop.mjs";
import { html_style_alternate_short_p } from "./html_style_alternate_short_p.mjs";
import { html_style_alternate_monospace_short } from "./html_style_alternate_monospace_short.mjs";
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
      html_style_alternate_monospace_short(
        root,
        "if we have a `function` that calls another `function` ...",
      );
      let i = 1;
      app_dev_screen_img(app_dev_screen_imports_add, root, i++);
      html_style_alternate_short_p(
        root,
        [noop, html_style_function_name],
        "... and we run `" +
          function_transform.name +
          "` and pass in `" +
          js_imports_add.name +
          "` and the name of the function ...",
      );
      app_dev_screen_img(app_dev_screen_imports_add, root, i++);
      html_style_alternate_monospace_short(
        root,
        "... then any missing `import`s will be added",
      );
      app_dev_screen_img(app_dev_screen_imports_add, root, i++);
      let code_initial = js_code_export_function_declare(
        function_name,
        args_string,
        body_string,
        space,
      );
      app_dev_sandbox_function(root, "adding missing `import`s");
    },
  };
}
