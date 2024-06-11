import { html_cycle_p } from "./html_cycle_p.mjs";
import { html_cycle_monospace_span } from "./html_cycle_monospace_span.mjs";
import { html_cycle_monospace_multiple } from "./html_cycle_monospace_multiple.mjs";
import { html_style_code } from "./html_style_code.mjs";
import { html_style_function_name } from "./html_style_function_name.mjs";
import { noop } from "./noop.mjs";
import { app_dev_sandbox_command_line } from "./app_dev_sandbox_command_line.mjs";
import { app_dev_screen_command_line_prefix } from "./app_dev_screen_command_line_prefix.mjs";
import { app_dev_screen_img } from "./app_dev_screen_img.mjs";
import { string_combine } from "./string_combine.mjs";
import { identity } from "./identity.mjs";
export function app_dev_screen_command_line() {
  return {
    name: function command_line_name(root) {
      return html_cycle_monospace_span(
        root,
        "run `function`s from command-line",
      );
    },
    screen: async function command_line_screen(root) {
      html_cycle_p(
        root,
        [noop, html_style_function_name, noop, html_style_code],
        "`" +
          string_combine.name +
          "` is a `function` that concatenates two strings",
      );
      let i = 1;
      app_dev_screen_img(app_dev_screen_command_line, root, i++);
      let prefix = app_dev_screen_command_line_prefix();
      html_cycle_monospace_multiple(root, [
        "all `export`ed `function`s in the code can be ran from the command-line",
        "this speeds up development",
        "to run a `function` named `function_name` from the command-line , run `" +
          prefix,
        "if the `function` accepts arguments , then enter command-line arguments `" +
          prefix +
          " arg_1 arg_2 etc",
      ]);
      app_dev_screen_img(app_dev_screen_command_line, root, i++);
      let args = [string_combine.name, "left", "right"];
      let try_out_message = "running a `function`";
      await app_dev_sandbox_command_line(root, args, try_out_message, identity);
    },
  };
}
