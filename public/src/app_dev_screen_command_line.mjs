import { log } from "./log.mjs";
import { string_starts_with_not } from "./string_starts_with_not.mjs";
import { app_learn_code_code_part_contrast } from "./app_learn_code_code_part_contrast.mjs";
import { html_textarea } from "./html_textarea.mjs";
import { app_learn_code_style_code_colored } from "./app_learn_code_style_code_colored.mjs";
import { html_a } from "./html_a.mjs";
import { app_dev_screen_img } from "./app_dev_screen_img.mjs";
import { html_style_alternate_monospace_short_multiple } from "./html_style_alternate_monospace_short_multiple.mjs";
import { function_name_to_url_github } from "./function_name_to_url_github.mjs";
import { html_inner_get } from "./html_inner_get.mjs";
import { html_style_alternate_short } from "./html_style_alternate_short.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_p } from "./html_p.mjs";
import { noop } from "./noop.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_style_font_color } from "./html_style_font_color.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_style_width_full } from "./html_style_width_full.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_combine } from "./string_combine.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export function app_dev_screen_command_line() {
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
            let url = function_name_to_url_github(text);
            let a = html_a(e, text, url);
            app_learn_code_style_code_colored(a);
            html_style_font_color(a, "darkblue");
          },
          noop,
        ],
        "string_combine` is a function that concatenates two strings",
      );
      let i = 1;
      app_dev_screen_img(app_dev_screen_command_line, root, i++);
      let prefix = "&gt; node run_git.mjs ";
      html_style_alternate_monospace_short_multiple(root, [
        "all `export`ed `function`s in the code can be ran from the command-line",
        "this speeds up development",
        "to run a function named `function_name` from the command-line , run `" +
          prefix,
        "if the function accepts arguments , then enter command-line arguments `" +
          prefix +
          " arg_1 arg_2 etc",
      ]);
      app_dev_screen_img(app_dev_screen_command_line, root, i++);
      html_p_text(
        root,
        "here is a sandbox to try out running a function from the command-line :",
      );
      let h = html_textarea(root);
      html_style_width_full(h);
      html_attribute_set(h, "rows", 2);
      html_attribute_set(h, "spellcheck", "false");
      html_inner_set(
        h,
        string_combine_multiple([prefix, string_combine.name, " left right"]),
      );
      html_button_width_full_text_click(root, "💻 run", run_click);
      let result = app_learn_code_code_part_contrast(root, "test");
      function run_click() {
        let text = html_inner_get(h);
        log({
          text,
        });
        if (string_starts_with_not(text, prefix)) {
          html_inner_set(result, "must begin with : " + prefix);
        }
      }
    },
  };
}
