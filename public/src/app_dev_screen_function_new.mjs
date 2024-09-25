import { fn_name } from "./fn_name.mjs";
import { html_cycle_code_span } from "./html_cycle_code_span.mjs";
import { html_cycle_code_multiple } from "./html_cycle_code_multiple.mjs";
import { html_cycle_p } from "./html_cycle_p.mjs";
import { html_cycle_function_name } from "./html_cycle_function_name.mjs";
import { html_style_code } from "./html_style_code.mjs";
import { app_dev_sandbox_command_line_result_remaining_first_function } from "./app_dev_sandbox_command_line_result_remaining_first_function.mjs";
import { function_name_new } from "./function_name_new.mjs";
import { app_dev_sandbox_command_line } from "./app_dev_sandbox_command_line.mjs";
import { html_style_function_name } from "./html_style_function_name.mjs";
import { noop } from "./noop.mjs";
import { app_dev_screen_img } from "./app_dev_screen_img.mjs";
export function app_dev_screen_function_new() {
  return {
    name: function function_new_name(root) {
      return html_cycle_code_span(root, "add new `function`");
    },
    screen: async function function_new_screen(root) {
      html_cycle_p(
        root,
        [html_style_function_name, noop, html_style_code],
        fn_name("function_new") + "` adds a new `function",
      );
      let i = 1;
      app_dev_screen_img(app_dev_screen_function_new, root, i++);
      html_cycle_function_name(
        root,
        "when `" + fn_name("function_new") + "` is ran :",
      );
      html_cycle_code_multiple(root, [
        "a file is created for the `function`",
        "the name of the file is the name of the `function",
        "the `function` is `export`ed",
        "then the newly-created `function` is automatically opened in visual studio code :",
      ]);
      app_dev_screen_img(app_dev_screen_function_new, root, i++);
      let function_name = await function_name_new("greetings");
      let args = [fn_name("function_new"), function_name];
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
