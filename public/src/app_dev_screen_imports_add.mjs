import { fn_name } from "./fn_name.mjs";
import { function_transform_command_line } from "./function_transform_command_line.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { html_cycle_code_span } from "./html_cycle_code_span.mjs";
import { app_dev_p_transformer } from "./app_dev_p_transformer.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { js_code_format } from "./js_code_format.mjs";
import { js_code_export_function_declare } from "./js_code_export_function_declare.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { app_dev_sandbox_function } from "./app_dev_sandbox_function.mjs";
import { js_code_statement_call_args } from "./js_code_statement_call_args.mjs";
import { function_name_new } from "./function_name_new.mjs";
import { js_imports_add } from "./js_imports_add.mjs";
import { app_dev_screen_img } from "./app_dev_screen_img.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { file_write } from "./file_write.mjs";
import { list_map } from "./list_map.mjs";
import { string_delimit } from "./string_delimit.mjs";
import { string_delimit_backtick } from "./string_delimit_backtick.mjs";
export function app_dev_screen_imports_add() {
  return {
    name: function imports_add_name(root) {
      return html_cycle_code_span(root, "add missing `import`s");
    },
    screen: async function imports_add_screen(root) {
      html_cycle_code(
        root,
        "if we have a `function` that calls another `function` ...",
      );
      let i = 1;
      app_dev_screen_img(app_dev_screen_imports_add, root, i++);
      app_dev_p_transformer(root, js_imports_add);
      app_dev_screen_img(app_dev_screen_imports_add, root, i++);
      html_cycle_code(root, "... then any missing `import`s will be added :");
      app_dev_screen_img(app_dev_screen_imports_add, root, i++);
      let function_name_unique = await function_name_new("missing_imports");
      let contents_function = js_code_export_function_declare(
        function_name_unique,
        "",
        js_code_statement_call_args(fn_name("log"), [
          js_code_call_args(fn_name("string_combine_multiple"), [
            js_code_array(list_map(["log", " ", "message"], string_delimit)),
          ]),
        ]),
        false,
      );
      let contents = await js_code_format(contents_function);
      let file_path = function_name_to_path(function_name_unique);
      await file_write(file_path, contents);
      await app_dev_sandbox_function(
        root,
        function_name_unique,
        "adding missing `import`s",
        string_delimit_backtick(
          string_combine_multiple([
            fn_name("function_transform_command_line"),
            " ",
            fn_name("js_imports_add"),
            " ",
            function_name_unique,
          ]),
        ),
        async () =>
          await function_transform_command_line(
            fn_name("js_imports_add"),
            function_name_unique,
          ),
      );
    },
  };
}
