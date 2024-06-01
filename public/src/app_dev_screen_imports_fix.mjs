import { function_transform } from "./function_transform.mjs";
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
import { app_dev_p_transformer } from "./app_dev_p_transformer.mjs";
import { js_imports_remove } from "./js_imports_remove.mjs";
import { app_dev_screen_imports_remove } from "./app_dev_screen_imports_remove.mjs";
import { html_style_alternate_monospace_short } from "./html_style_alternate_monospace_short.mjs";
import { app_dev_screen_img } from "./app_dev_screen_img.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_dev_screen_imports_fix() {
  return {
    name: function imports_fix_name(root) {
      return html_span_text(root, "imports_fix");
    },
    screen: async function imports_fix_screen(root) {
      let i = 1;
      ("`js_imports_add` adds missing imports and `js_imports_remove` removes unused imports");
      ("to do both , use `js_imports_fix`");
      html_style_alternate_monospace_short(
        root,
        "if we have an `import` that is not being used ...",
      );
      app_dev_screen_img(app_dev_screen_imports_remove, root, i++);
      let fn = js_imports_remove;
      app_dev_p_transformer(root, fn.name);
      app_dev_screen_img(app_dev_screen_imports_remove, root, i++);
      html_style_alternate_monospace_short(
        root,
        "... then any unused `import`s will be removed :",
      );
      app_dev_screen_img(app_dev_screen_imports_remove, root, i++);
      let function_name_unique = await function_name_new("unused_imports");
      let contents_function = js_code_export_function_declare(
        function_name_unique,
        "",
        "",
        false,
      );
      let contents = await js_code_format(
        string_combine(js_code_import(string_combine.name), contents_function),
      );
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
