import { app_dev_p_transformer } from "./app_dev_p_transformer.mjs";
import { html_style_alternate_monospace_short } from "./html_style_alternate_monospace_short.mjs";
import { html_style_alternate_monospace_short_span } from "./html_style_alternate_monospace_short_span.mjs";
import { app_dev_screen_img } from "./app_dev_screen_img.mjs";
import { js_imports_remove } from "./js_imports_remove.mjs";
export function app_dev_screen_imports_remove() {
  return {
    name: function imports_remove_name(root) {
      return html_style_alternate_monospace_short_span(
        root,
        "remove unused `import`s",
      );
    },
    screen: function imports_remove_screen(root) {
      let i = 1;
      html_style_alternate_monospace_short(
        root,
        "if we have an `import` that is not being used ...",
      );
      app_dev_screen_img(app_dev_screen_imports_remove, root, i++);
      app_dev_p_transformer(root, js_imports_remove.name);
      app_dev_screen_img(app_dev_screen_imports_remove, root, i++);
      html_style_alternate_monospace_short(
        root,
        "... then any unused `import`s will be removed",
      );
      app_dev_screen_img(app_dev_screen_imports_remove, root, i++);
      let function_name_unique =  function_name_new("add_missing_imports");
      let contents_function = js_code_export_function_declare(
        function_name_unique,
        "",
        list_join_space([
          js_code_statement_call_args(log.name, [
            js_code_call_args(string_combine_multiple.name, [
              js_code_array(list_map(["log", " ", "message"], string_delimit)),
            ]),
          ]),
        ]),
        false,
      );
      let contents =  js_code_format(contents_function);
      let file_path = function_name_to_path(function_name_unique);
       file_write(file_path, contents);
       app_dev_sandbox_function(
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
