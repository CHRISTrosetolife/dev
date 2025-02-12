import { fn_name } from "./fn_name.mjs";
import { function_transform_command_line } from "./function_transform_command_line.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { html_cycle_code_span } from "./html_cycle_code_span.mjs";
import { html_cycle_function_name } from "./html_cycle_function_name.mjs";
import { app_dev_p_transformer_generic } from "./app_dev_p_transformer_generic.mjs";
import { js_code_statement_call_args } from "./js_code_statement_call_args.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_delimit_backtick } from "./string_delimit_backtick.mjs";
import { app_dev_sandbox_function } from "./app_dev_sandbox_function.mjs";
import { file_write } from "./file_write.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { js_code_import } from "./js_code_import.mjs";
import { string_combine } from "./string_combine.mjs";
import { js_code_format } from "./js_code_format.mjs";
import { js_code_export_function_declare } from "./js_code_export_function_declare.mjs";
import { function_name_new } from "./function_name_new.mjs";
import { app_dev_screen_img } from "./app_dev_screen_img.mjs";
import { js_imports_fix } from "./js_imports_fix.mjs";
import { string_delimit } from "./string_delimit.mjs";
export function app_dev_screen_imports_fix() {
  return {
    name: function imports_fix_name(root) {
      return html_cycle_code_span(root, "adding and removing `import`s");
    },
    screen: async function imports_fix_screen(root) {
      let i = 1;
      html_cycle_function_name(
        root,
        "`js_imports_add` adds missing imports and `js_imports_remove` removes unused imports",
      );
      html_cycle_function_name(
        root,
        "to add and remove at the same time , use `js_imports_fix` :",
      );
      app_dev_screen_img(app_dev_screen_imports_fix, root, i++);
      let fn = js_imports_fix;
      app_dev_p_transformer_generic(root, fn, "if");
      app_dev_screen_img(app_dev_screen_imports_fix, root, i++);
      html_cycle_code(
        root,
        "... then any missing `imports` will be added and any unused `import`s will be removed :",
      );
      app_dev_screen_img(app_dev_screen_imports_fix, root, i++);
      let function_name_unique = await function_name_new("fix_imports");
      let contents_function = js_code_export_function_declare(
        function_name_unique,
        "",
        js_code_statement_call_args(fn_name("log"), [
          string_delimit("log message"),
        ]),
        false,
      );
      let code = string_combine(
        js_code_import(fn_name("string_combine")),
        contents_function,
      );
      let contents = await js_code_format(code);
      let file_path = function_name_to_path(function_name_unique);
      await file_write(file_path, contents);
      await app_dev_sandbox_function(
        root,
        function_name_unique,
        "fixing `import`s",
        string_delimit_backtick(
          string_combine_multiple([
            fn_name("function_transform_command_line"),
            " ",
            fn.name,
            " ",
            function_name_unique,
          ]),
        ),
        async () =>
          await function_transform_command_line(fn.name, function_name_unique),
      );
    },
  };
}
