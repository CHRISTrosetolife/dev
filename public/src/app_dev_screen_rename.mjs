import { fn_name } from "./fn_name.mjs";
import { html_style_code } from "./html_style_code.mjs";
import { html_style_function_name } from "./html_style_function_name.mjs";
import { noop } from "./noop.mjs";
import { html_cycle_p } from "./html_cycle_p.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { html_cycle_code_span } from "./html_cycle_code_span.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function app_dev_screen_rename() {
  let v = {
    name: function rename_name(root) {
      let v2 = html_cycle_code_span(
        root,
        "renaming a `function` or multiple `function`s at once",
      );
      return v2;
    },
    screen: function rename_screen(root) {
      html_cycle_p(
        root,
        [noop, html_style_function_name, noop, html_style_code],
        string_combine_multiple([
          "`",
          fn_name("function_rename"),
          "` can be used to rename a single `function",
        ]),
      );
      html_cycle_code(
        root,
        "the file is renamed , all identifiers in all files are renamed , and all `import`s are updated to match the new file name",
      );
      html_cycle_code(
        root,
        "it is easy to write a `function` that renames multiple `function`s at once :",
      );
      html_cycle_p(
        root,
        [noop, html_style_function_name, noop, html_style_code],
        string_combine_multiple([
          "for example , `",
          fn_name("functions_rename_if_starts_with"),
          "` can be used to rename all `function`s starting with a prefix to start with a different prefix , instead",
        ]),
      );
    },
  };
  return v;
}
