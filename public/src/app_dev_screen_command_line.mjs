import { html_style_alternate_monospace_short_multiple } from "./html_style_alternate_monospace_short_multiple.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { function_name_to_url_github } from "./function_name_to_url_github.mjs";
import { html_inner_get } from "./html_inner_get.mjs";
import { html_style_alternate_short } from "./html_style_alternate_short.mjs";
import { html_img_limited_centered } from "./html_img_limited_centered.mjs";
import { path_join } from "./path_join.mjs";
import { app_dev } from "./app_dev.mjs";
import { app_name } from "./app_name.mjs";
import { app_dev_screen_prefix } from "./app_dev_screen_prefix.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_p } from "./html_p.mjs";
import { noop } from "./noop.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_element } from "./html_element.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
export function app_dev_screen_command_line() {
  let name = string_prefix_without(
    app_dev_screen_command_line.name,
    app_dev_screen_prefix(),
  );
  return {
    name: function command_line_name(root) {
      return html_span_text(root, "command_line");
    },
    screen: function command_line_screen(root) {
      html_style_alternate_short(
        root,
        html_p,
        [
          (e) => {
            let text = html_inner_get(e);
            html_clear(e);
            let a = html_element(e, "a");
            html_inner_set(a, text);
            let url = function_name_to_url_github(text);
            html_attribute_set(a, "href", url);
            html_attribute_set(a, "target", "_blank");
            html_style_bold(a);
          },
          noop,
        ],
        "string_combine` is a function that concatenates two strings",
      );
      html_img_limited_centered(
        root,
        path_join([app_name(app_dev), name, "1.png"]),
      );
      html_style_alternate_monospace_short_multiple(root, [
        "all functions can be ran from the command-line",
        "this speeds up development",
        "to run a function named `function_name` from the command-line , run `> node run_git.mjs function_name",
        "if the function accepts arguments , then enter command-line arguments `> node run_git.mjs function_name arg_1 arg_2 etc",
      ]);
    },
  };
}
