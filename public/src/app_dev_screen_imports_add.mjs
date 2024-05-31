import { log } from "./log.mjs";
import { js_code_statement_call_args } from "./js_code_statement_call_args.mjs";
import { function_name_new } from "./function_name_new.mjs";
import { app_dev_sandbox_function } from "./app_dev_sandbox_function.mjs";
import { html_style_function_name } from "./html_style_function_name.mjs";
import { noop } from "./noop.mjs";
import { html_style_alternate_short_p } from "./html_style_alternate_short_p.mjs";
import { html_style_alternate_monospace_short } from "./html_style_alternate_monospace_short.mjs";
import { js_imports_add } from "./js_imports_add.mjs";
import { function_transform } from "./function_transform.mjs";
import { app_dev_screen_img } from "./app_dev_screen_img.mjs";
import { html_style_alternate_monospace_short_span } from "./html_style_alternate_monospace_short_span.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { function_new_generic } from "./function_new_generic.mjs";
import { file_write } from "./file_write.mjs";
export function app_dev_screen_imports_add() {
  return {
    name: function imports_add_name(root) {
      return html_style_alternate_monospace_short_span(
        root,
        "add missing `import`s",
      );
    },
    screen: async function imports_add_screen(root) {
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
      let function_name_unique = await function_name_new("add_missing_imports");
      await function_new_generic(
        function_name_unique,
        "",
        list_join_space([
          js_code_statement_call_args(log.name, [
            js_code_call_args(string_combine_multiple.name, [
              "log",
              " ",
              "message",
            ]),
          ]),
        ]),
        false,
        [],
        false,
        file_write,
      );
      app_dev_sandbox_function(
        root,
        function_name_unique,
        "adding missing `import`s",
      );
    },
  };
}
