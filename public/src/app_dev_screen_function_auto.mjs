import { function_transform } from "./function_transform.mjs";
import { string_delimit_backtick } from "./string_delimit_backtick.mjs";
import { app_dev_sandbox_function_multiple } from "./app_dev_sandbox_function_multiple.mjs";
import { file_write } from "./file_write.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { js_code_format } from "./js_code_format.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { js_code_return } from "./js_code_return.mjs";
import { js_code_export_function_declare } from "./js_code_export_function_declare.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { add } from "./add.mjs";
import { multiply } from "./multiply.mjs";
import { js_code_statement_call_args } from "./js_code_statement_call_args.mjs";
import { js_code_function_declare } from "./js_code_function_declare.mjs";
import { function_name_new } from "./function_name_new.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { html_cycle_function_name } from "./html_cycle_function_name.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_dev_screen_function_auto() {
  return {
    name: function function_auto_name(root) {
      return html_span_text(root, "perform all refactors at once");
    },
    screen: async function function_auto_screen(root) {
      html_cycle_code(
        root,
        "so far many `function`s have been shown that refactor code",
      );
      html_cycle_function_name(
        root,
        "`function_auto` performs all these refactors at once",
      );
      let fn_a = await function_name_new("auto");
      let fn_b = await function_name_new("auto_add");
      let fn_c = await function_name_new("auto_multiply");
      let contents_c = js_code_function_declare(
        fn_c,
        "a,b",
        js_code_statement_call_args(multiply.name, ["a", "b"]),
      );
      let contents_b = js_code_function_declare(
        fn_b,
        "a,b,c",
        js_code_statement_call_args(add.name, [
          "a",
          js_code_call_args(fn_c, ["b", "c"]),
        ]),
      );
      let contents_a = js_code_export_function_declare(
        fn_a,
        "",
        js_code_return(js_code_call_args(fn_b, ["1", "2", "3"])),
        false,
      );
      let code = string_combine_multiple([contents_a, contents_b, contents_c]);
      let contents = await js_code_format(code);
      let file_path = function_name_to_path(fn_a);
      await file_write(file_path, contents);
      await app_dev_sandbox_function_multiple(
        root,
        true,
        fn_a,
        "moving `function`s to their own file",
        (fn_name) =>
          string_delimit_backtick(
            string_combine_multiple([
              function_transform.name,
              " ",
              fn.name,
              " ",
              fn_name,
            ]),
          ),
        async (fn_name) => await function_transform(fn.name, fn_name),
      );
    },
  };
}
