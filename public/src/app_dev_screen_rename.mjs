import { html_cycle_code_span } from "./html_cycle_code_span.mjs";
export function app_dev_screen_rename() {
  return {
    name: function rename_name(root) {
      return html_cycle_code_span(
        root,
        "renaming a `function` or multiple `function`s at once",
      );
    },
    screen: function rename_screen(root) {
      "`function_rename` can be used to rename a single function";
      "the file is renamed , all identifiers in all files are renamed , and all imports are updated to match the new fil name";
    },
  };
}
