import { html_span_text } from "./html_span_text.mjs";
export function app_dev_screen_function_new() {
  return {
    name: function function_new_name(root) {
      return html_span_text(root, "`function` that adds a new `function`");
    },
    screen: function function_new_screen(root) {
      "function_new adds a new function";
      "a file is created for the function";
      "the function is exported";
    },
  };
}
