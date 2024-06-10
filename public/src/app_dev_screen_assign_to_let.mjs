import { js_code_declare_assign } from "./js_code_declare_assign.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { js_code_statement_assign } from "./js_code_statement_assign.mjs";
import { function_transform } from "./function_transform.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_delimit_backtick } from "./string_delimit_backtick.mjs";
import { app_dev_sandbox_function } from "./app_dev_sandbox_function.mjs";
import { file_write } from "./file_write.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { js_code_format } from "./js_code_format.mjs";
import { js_code_export_function_declare } from "./js_code_export_function_declare.mjs";
import { function_name_new } from "./function_name_new.mjs";
import { html_style_alternate_monospace_short } from "./html_style_alternate_monospace_short.mjs";
import { app_dev_p_transformer } from "./app_dev_p_transformer.mjs";
import { js_assign_to_let } from "./js_assign_to_let.mjs";
import { app_dev_screen_img } from "./app_dev_screen_img.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_dev_screen_assign_to_let() {
  return {
    name: function assign_to_let_name(root) {
      return html_span_text(root, "adding `let` to variable assignments");
    },
    screen: async function assign_to_let_screen(root) {
      let i = 1;
      html_style_alternate_monospace_short(
        root,
        "if a variable is assigned a value , but `let` and `var` are not used , and if the variable is not already defined ...",
      );
      app_dev_screen_img(app_dev_screen_assign_to_let, root, i++);
      let fn = js_assign_to_let;
      app_dev_p_transformer(root, fn);
      app_dev_screen_img(app_dev_screen_assign_to_let, root, i++);
      html_style_alternate_monospace_short(
        root,
        "... then the assignment will change to a `let` declaration assignment :",
      );
      app_dev_screen_img(app_dev_screen_assign_to_let, root, i++);
      let function_name_unique = await function_name_new("assign_to_let");
      let contents_function = js_code_export_function_declare(
        function_name_unique,
        "a",
        list_join_empty([
          js_code_statement_assign("a", 1),
          js_code_statement(js_code_declare_assign("b", 2)),
          js_code_statement_assign("b", 3),
          js_code_statement_assign("c", 4),
        ]),
        false,
      );
      let contents = await js_code_format(contents_function);
      let file_path = function_name_to_path(function_name_unique);
      await file_write(file_path, contents);
      await app_dev_sandbox_function(
        root,
        function_name_unique,
        "adding `let`",
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
