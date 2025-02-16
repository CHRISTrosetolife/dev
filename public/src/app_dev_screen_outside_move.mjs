import { fn_name } from "./fn_name.mjs";
import { function_transform_command_line } from "./function_transform_command_line.mjs";
import { js_code_statement_return } from "./js_code_statement_return.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { html_cycle_code_span } from "./html_cycle_code_span.mjs";
import { app_dev_sandbox_function_multiple } from "./app_dev_sandbox_function_multiple.mjs";
import { function_name_new } from "./function_name_new.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_code_function_declare } from "./js_code_function_declare.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_delimit_backtick } from "./string_delimit_backtick.mjs";
import { file_write } from "./file_write.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { js_code_format } from "./js_code_format.mjs";
import { js_code_statement_call_args } from "./js_code_statement_call_args.mjs";
import { js_code_export_function_declare } from "./js_code_export_function_declare.mjs";
import { app_dev_p_transformer } from "./app_dev_p_transformer.mjs";
import { js_outside_move } from "./js_outside_move.mjs";
import { app_dev_screen_img } from "./app_dev_screen_img.mjs";
export function app_dev_screen_outside_move() {
  let v = {
    name: function outside_move_name(root) {
      let v2 = html_cycle_code_span(
        root,
        "moving `function`s to their own file",
      );
      return v2;
    },
    screen: async function outside_move_screen(root) {
      let i = 1;
      html_cycle_code(root, "if we have `function`s in the module scope ...");
      app_dev_screen_img(app_dev_screen_outside_move, root, i++);
      let fn = js_outside_move;
      app_dev_p_transformer(root, fn);
      app_dev_screen_img(app_dev_screen_outside_move, root, i++);
      html_cycle_code(
        root,
        "... then the `function`s will be moved to their own files and the `import`s will be fixed in all files ...",
      );
      app_dev_screen_img(app_dev_screen_outside_move, root, i++);
      app_dev_screen_img(app_dev_screen_outside_move, root, i++);
      app_dev_screen_img(app_dev_screen_outside_move, root, i++);
      let fn_a = await function_name_new("outside_move");
      let fn_b = await function_name_new("outside_move_add");
      let fn_c = await function_name_new("outside_move_multiply");
      let contents_c = js_code_function_declare(
        fn_c,
        "a,b",
        js_code_statement_call_args(fn_name("multiply"), ["a", "b"]),
      );
      let contents_b = js_code_function_declare(
        fn_b,
        "a,b,c",
        js_code_statement_call_args(fn_name("add"), [
          "a",
          js_code_call_args(fn_c, ["b", "c"]),
        ]),
      );
      let contents_a = js_code_export_function_declare(
        fn_a,
        "",
        js_code_statement_return(js_code_call_args(fn_b, ["1", "2", "3"])),
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
        function (f_name) {
          let v3 = string_delimit_backtick(
            string_combine_multiple([
              fn_name("function_transform_command_line"),
              " ",
              fn.name,
              " ",
              f_name,
            ]),
          );
          return v3;
        },
        async function (f_name) {
          let v4 = await function_transform_command_line(fn.name, f_name);
          return v4;
        },
      );
    },
  };
  return v;
}
