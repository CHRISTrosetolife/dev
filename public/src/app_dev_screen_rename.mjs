import { function_rename } from "./function_rename.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { html_cycle_function_name } from "./html_cycle_function_name.mjs";
import { html_cycle_code_span } from "./html_cycle_code_span.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function app_dev_screen_rename() {
  return {
    name: function rename_name(root) {
      return html_cycle_code_span(
        root,
        "renaming a `function` or multiple `function`s at once",
      );
    },
    screen: function rename_screen(root) {
      html_cycle_function_name(
        root,
        string_combine_multiple([
          "`",
          function_rename.name,
          "` can be used to rename a single function",
        ]),
      );
      html_cycle_code(
        root,
        "the file is renamed , all identifiers in all files are renamed , and all `import`s are updated to match the new file name",
      );
    },
  };
}
