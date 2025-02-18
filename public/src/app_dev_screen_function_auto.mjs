import { fn_name } from "./fn_name.mjs";
import { js_code_statement_return } from "./js_code_statement_return.mjs";
import { html_hr } from "./html_hr.mjs";
import { app_dev_screen_if_to_block_if_else } from "./app_dev_screen_if_to_block_if_else.mjs";
import { js_code_statement_assign } from "./js_code_statement_assign.mjs";
import { js_code_import } from "./js_code_import.mjs";
import { function_auto_results } from "./function_auto_results.mjs";
import { string_delimit_backtick } from "./string_delimit_backtick.mjs";
import { app_dev_sandbox_function_multiple } from "./app_dev_sandbox_function_multiple.mjs";
import { file_write } from "./file_write.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { js_code_format } from "./js_code_format.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { js_code_export_function_declare } from "./js_code_export_function_declare.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_code_statement_call_args } from "./js_code_statement_call_args.mjs";
import { js_code_function_declare } from "./js_code_function_declare.mjs";
import { function_name_new } from "./function_name_new.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { html_cycle_function_name } from "./html_cycle_function_name.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_p_text } from "./html_p_text.mjs";
export function app_dev_screen_function_auto() {
  return {
    name: function function_auto_name(root) {
      return html_span_text(root, "perform all refactors at once on file save");
    },
    screen: async function function_auto_screen(root) {
      html_cycle_code(
        root,
        "so far many `function`s have been shown that refactor code",
      );
      let fn = function_auto_results;
      html_cycle_function_name(
        root,
        string_combine_multiple([
          "`",
          fn.name,
          "` performs all these refactors at once",
        ]),
      );
      html_hr(root);
      html_cycle_function_name(
        root,
        string_combine_multiple([
          "while `",
          fn_name("watch"),
          "` is running , then , every time a file is saved , `",
          fn.name,
          "` is called ",
        ]),
      );
      html_p_text(
        root,
        "just saving a file will perform all these refactors at once",
      );
      let fn_a = await function_name_new("auto");
      let fn_b = await function_name_new("auto_add");
      let fn_c = await function_name_new("auto_multiply");
      let contents_c = js_code_function_declare(
        fn_c,
        "a,b",
        js_code_statement_call_args(fn_name("multiply"), ["a", "b"]),
        false,
      );
      let contents_b = js_code_function_declare(
        fn_b,
        "a,b,c",
        js_code_statement_call_args(fn_name("add"), [
          "a",
          js_code_call_args(fn_c, ["b", "c"]),
        ]),
        false,
      );
      let contents_a = js_code_export_function_declare(
        fn_a,
        "",
        string_combine_multiple([
          js_code_statement_assign("c", 4),
          js_code_statement_call_args(fn_name("sleep"), [100]),
          app_dev_screen_if_to_block_if_else(),
          js_code_statement_return(js_code_call_args(fn_b, ["1", "2", "3"])),
        ]),
        false,
      );
      let code = string_combine_multiple([
        js_code_import(fn_name("log")),
        contents_a,
        contents_b,
        contents_c,
      ]);
      let contents = await js_code_format(code);
      let file_path = function_name_to_path(fn_a);
      await file_write(file_path, contents);
      await app_dev_sandbox_function_multiple(
        root,
        true,
        fn_a,
        "perform all refactors at once",
        (fn_name) =>
          string_delimit_backtick(
            string_combine_multiple([fn.name, " ", fn_name]),
          ),
        async (fn_name) => await fn(fn_name),
      );
    },
  };
}
