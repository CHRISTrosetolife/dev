import { fn_name } from "./fn_name.mjs";
import { html_style_link_blank } from "./html_style_link_blank.mjs";
import { app_dev_screen_if_to_block_if_else } from "./app_dev_screen_if_to_block_if_else.mjs";
import { function_transform } from "./function_transform.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_delimit_backtick } from "./string_delimit_backtick.mjs";
import { app_dev_sandbox_function } from "./app_dev_sandbox_function.mjs";
import { file_write } from "./file_write.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { js_code_format } from "./js_code_format.mjs";
import { js_code_export_function_declare } from "./js_code_export_function_declare.mjs";
import { function_name_new } from "./function_name_new.mjs";
import { html_style_code } from "./html_style_code.mjs";
import { noop } from "./noop.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { html_cycle_code_span } from "./html_cycle_code_span.mjs";
import { app_dev_p_transformer } from "./app_dev_p_transformer.mjs";
import { js_if_to_block } from "./js_if_to_block.mjs";
import { app_dev_screen_img } from "./app_dev_screen_img.mjs";
import { html_cycle_p } from "./html_cycle_p.mjs";
export function app_dev_screen_if_to_block() {
  return {
    name: function if_to_block_name(root) {
      return html_cycle_code_span(root, "changing `if` statements to blocks");
    },
    screen: async function if_to_block_screen(root) {
      html_cycle_p(
        root,
        [
          noop,
          html_style_link_blank(
            string_combine_multiple([
              "https://google.github.io/styleguide/jsguide.html#formatting-braces-all",
            ]),
          ),
          noop,
          html_style_code,
        ],
        "the `google javascript style guide` , for example , generally requires that `if` statements be blocks :",
      );
      html_cycle_code(
        root,
        "if there is an `if` statement that is not a block ...",
      );
      let i = 1;
      app_dev_screen_img(app_dev_screen_if_to_block, root, i++);
      let fn = js_if_to_block;
      app_dev_p_transformer(root, fn);
      app_dev_screen_img(app_dev_screen_if_to_block, root, i++);
      html_cycle_code(
        root,
        "... then the `if` statement will change to a block :",
      );
      app_dev_screen_img(app_dev_screen_if_to_block, root, i++);
      let function_name_unique = await function_name_new("if_to_block");
      let contents_function = js_code_export_function_declare(
        function_name_unique,
        "",
        app_dev_screen_if_to_block_if_else(),
        false,
      );
      let contents = await js_code_format(contents_function);
      let file_path = function_name_to_path(function_name_unique);
      await file_write(file_path, contents);
      await app_dev_sandbox_function(
        root,
        function_name_unique,
        "adding braces to `if`",
        string_delimit_backtick(
          string_combine_multiple([
            fn_name("function_transform"),
            " ",
            fn.name,
            " ",
            function_name_unique,
          ]),
        ),
        async () => await function_transform(fn.name, function_name_unique),
      );
    },
  };
}
