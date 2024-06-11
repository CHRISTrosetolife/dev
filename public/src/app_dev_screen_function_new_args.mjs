import { html_cycle_p } from "./html_cycle_p.mjs";
import { html_cycle_monospace_span } from "./html_cycle_monospace_span.mjs";
import { html_cycle_monospace_multiple } from "./html_cycle_monospace_multiple.mjs";
import { html_style_code } from "./html_style_code.mjs";
import { app_dev_sandbox_command_line_result_remaining_first_function } from "./app_dev_sandbox_command_line_result_remaining_first_function.mjs";
import { app_dev_sandbox_command_line } from "./app_dev_sandbox_command_line.mjs";
import { function_name_new } from "./function_name_new.mjs";
import { function_new_args } from "./function_new_args.mjs";
import { app_dev_screen_img } from "./app_dev_screen_img.mjs";
import { noop } from "./noop.mjs";
import { html_style_function_name } from "./html_style_function_name.mjs";
import { html_p_text_multiple } from "./html_p_text_multiple.mjs";
export function app_dev_screen_function_new_args() {
  return {
    name: function function_new_name(root) {
      return html_cycle_monospace_span(
        root,
        "add new `function` with parameters",
      );
    },
    screen: async function function_new_args_screen(root) {
      html_cycle_p(
        root,
        [html_style_function_name, noop, html_style_code, noop],
        function_new_args.name + "` adds a new `function` with parameters",
      );
      html_cycle_monospace_multiple(root, [
        "suppose we want to add a `function` named `greet_person` with two parameters : `first_name` and `last_name`",
        "here is the command :",
      ]);
      let i = 1;
      app_dev_screen_img(app_dev_screen_function_new_args, root, i++);
      html_p_text_multiple(root, [
        "the parameters should be separated by commas with no spaces",
        "here is the result :",
      ]);
      app_dev_screen_img(app_dev_screen_function_new_args, root, i++);
      let function_name = await function_name_new("greetings");
      let args = [
        function_new_args.name,
        function_name,
        "first_name,last_name",
      ];
      let try_out_message = "creating a new `function`";
      await app_dev_sandbox_command_line(
        root,
        args,
        try_out_message,
        app_dev_sandbox_command_line_result_remaining_first_function,
      );
    },
  };
}
