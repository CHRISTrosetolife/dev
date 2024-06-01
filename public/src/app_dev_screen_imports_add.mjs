import { app_dev_p_transformer } from "./app_dev_p_transformer.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { js_code_format } from "./js_code_format.mjs";
import { js_code_export_function_declare } from "./js_code_export_function_declare.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { app_dev_sandbox_function } from "./app_dev_sandbox_function.mjs";
import { log } from "./log.mjs";
import { js_code_statement_call_args } from "./js_code_statement_call_args.mjs";
import { function_name_new } from "./function_name_new.mjs";
import { html_style_alternate_monospace_short } from "./html_style_alternate_monospace_short.mjs";
import { js_imports_add } from "./js_imports_add.mjs";
import { function_transform } from "./function_transform.mjs";
import { app_dev_screen_img } from "./app_dev_screen_img.mjs";
import { html_style_alternate_monospace_short_span } from "./html_style_alternate_monospace_short_span.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { file_write } from "./file_write.mjs";
import { list_map } from "./list_map.mjs";
import { string_delimit } from "./string_delimit.mjs";
import { string_delimit_backtick } from "./string_delimit_backtick.mjs";
export function app_dev_screen_imports_add() {
  return {
    name: function imports_add_name(root) {
      return html_style_alternate_monospace_short_span(
        root,
        "add missing `import`s",
      );
    },
    screen: async function imports_add_screen(root) {
      html_style_alternate_monospace_short(
        root,
        "if we have a `function` that calls another `function` ...",
      );
      let i = 1;
      app_dev_screen_img(app_dev_screen_imports_add, root, i++);
      app_dev_p_transformer(root, js_imports_add.name);
      app_dev_screen_img(app_dev_screen_imports_add, root, i++);
      html_style_alternate_monospace_short(
        root,
        "... then any missing `import`s will be added :",
      );
      app_dev_screen_img(app_dev_screen_imports_add, root, i++);
      let function_name_unique = await function_name_new("missing_imports");
      let contents_function = js_code_export_function_declare(
        function_name_unique,
        "",
        js_code_statement_call_args(log.name, [
          js_code_call_args(string_combine_multiple.name, [
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
            function_transform.name,
            " ",
            js_imports_add.name,
            " ",
            function_name_unique,
          ]),
        ),
        async () =>
          await function_transform(js_imports_add.name, function_name_unique),
      );
    },
  };
}
