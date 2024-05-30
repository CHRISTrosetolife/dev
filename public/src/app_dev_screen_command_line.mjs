import { app_learn_code_code_background_set } from "./app_learn_code_code_background_set.mjs";
import { folder_current_prefix_combine } from "./folder_current_prefix_combine.mjs";
import { function_name_to_file_name } from "./function_name_to_file_name.mjs";
import { list_first_remaining } from "./list_first_remaining.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { app_learn_code_style_code_error } from "./app_learn_code_style_code_error.mjs";
import { html_value_get } from "./html_value_get.mjs";
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
import { html_hr } from "./html_hr.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
import { string_delimit } from "./string_delimit.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function app_dev_screen_command_line() {
  return {
    name: function command_line_name(root) {
      let result = html_span_text(root, "run functions from command-line");
    },
    screen: async function command_line_screen(root) {
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
      let prefix = "> node run.mjs ";
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
      html_hr(root);
      html_p_text(
        root,
        "here is a sandbox for you to try out running a function from the command-line :",
      );
      let textarea = html_textarea(root);
      html_style_width_full(textarea);
      html_attribute_set(textarea, "rows", 2);
      html_attribute_set(textarea, "spellcheck", "false");
      html_inner_set(
        textarea,
        string_combine_multiple([prefix, string_combine.name, " left right"]),
      );
      html_button_width_full_text_click(root, "💻 run", run_click);
      let result_component = app_learn_code_code_part_contrast(root, "");
      await run_click();
      async function run_click() {
        let text = html_value_get(textarea);
        if (string_starts_with_not(text, prefix)) {
          let message = "must begin with : " + string_delimit(prefix);
          run_error(message);
          return;
        }
        app_learn_code_code_background_set(result_component);
        let without = string_prefix_without(text, prefix);
        let parts = string_split_space(without);
        let { first: function_name, remaining } = list_first_remaining(parts);
        let file_name = folder_current_prefix_combine(
          function_name_to_file_name(function_name),
        );
        let imported;
        try {
          imported = await import(file_name);
        } catch (e) {
          run_error(
            string_combine_multiple([
              "failed to import ",
              function_name,
              " ; error message : ",
              e,
            ]),
          );
          return;
        }
        let fn = object_property_get(imported, function_name);
        let result = await fn(...remaining);
        html_inner_set(result_component, result);
        function run_error(message) {
          app_learn_code_style_code_error(result_component);
          html_inner_set(result_component, message);
        }
      }
    },
  };
}
