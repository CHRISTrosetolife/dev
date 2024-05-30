import { app_dev_sandbox_command_line } from "./app_dev_sandbox_command_line.mjs";
import { string_combine } from "./string_combine.mjs";
import { function_new } from "./function_new.mjs";
import { html_style_alternate_monospace_short_span } from "./html_style_alternate_monospace_short_span.mjs";
import { html_style_alternate_short_function_name } from "./html_style_alternate_short_function_name.mjs";
import { html_style_alternate_monospace_short_multiple } from "./html_style_alternate_monospace_short_multiple.mjs";
import { app_learn_code_style_code_colored } from "./app_learn_code_style_code_colored.mjs";
import { html_style_function_name } from "./html_style_function_name.mjs";
import { noop } from "./noop.mjs";
import { html_style_alternate_short_p } from "./html_style_alternate_short_p.mjs";
import { app_dev_screen_img } from "./app_dev_screen_img.mjs";
export function app_dev_screen_function_new() {
  return {
    name: function function_new_name(root) {
      return html_style_alternate_monospace_short_span(
        root,
        "add new `function`",
      );
    },
    screen: async function function_new_screen(root) {
      html_style_alternate_short_p(
        root,
        [html_style_function_name, noop, app_learn_code_style_code_colored],
        function_new.name + "` adds a new `function",
      );
      let i = 1;
      app_dev_screen_img(app_dev_screen_function_new, root, i++);
      html_style_alternate_short_function_name(
        root,
        "when `" + function_new.name + "` is ran :",
      );
      html_style_alternate_monospace_short_multiple(root, [
        "a file is created for the `function`",
        "the name of the file is the name of the `function",
        "the `function` is `export`ed",
        "then the newly-created `function` is automatically opened in visual studio code :",
      ]);
      app_dev_screen_img(app_dev_screen_function_new, root, i++);
      let args = [string_combine.name, "left", "right"];
      let try_out_message = "running a function from the command-line";
      1;
      await app_dev_sandbox_command_line(root, args, try_out_message);
    },
  };
}
