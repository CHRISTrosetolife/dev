import { html_style_alternate_monospace_short_span } from "./html_style_alternate_monospace_short_span.mjs";
import { app_dev_sandbox_function_multiple } from "./app_dev_sandbox_function_multiple.mjs";
import { function_name_new } from "./function_name_new.mjs";
import { js_code_return } from "./js_code_return.mjs";
import { log } from "./log.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { add } from "./add.mjs";
import { multiply } from "./multiply.mjs";
import { js_code_function_declare } from "./js_code_function_declare.mjs";
import { function_transform } from "./function_transform.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_delimit_backtick } from "./string_delimit_backtick.mjs";
import { file_write } from "./file_write.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { js_code_format } from "./js_code_format.mjs";
import { js_code_statement_call_args } from "./js_code_statement_call_args.mjs";
import { js_code_export_function_declare } from "./js_code_export_function_declare.mjs";
import { html_style_alternate_monospace_short } from "./html_style_alternate_monospace_short.mjs";
import { app_dev_p_transformer } from "./app_dev_p_transformer.mjs";
import { js_outside_move } from "./js_outside_move.mjs";
import { app_dev_screen_img } from "./app_dev_screen_img.mjs";
export function app_dev_screen_outside_move() {
  return {
    name: function outside_move_name(root) {
      return html_style_alternate_monospace_short_span(
        root,
        "moving `function`s to their own file",
      );
    },
    screen: async function outside_move_screen(root) {
      let i = 1;
      html_style_alternate_monospace_short(
        root,
        "if we have `function`s in the module scope ...",
      );
      app_dev_screen_img(app_dev_screen_outside_move, root, i++);
      let fn = js_outside_move;
      app_dev_p_transformer(root, fn);
      app_dev_screen_img(app_dev_screen_outside_move, root, i++);
      html_style_alternate_monospace_short(
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
      log({
        code,
      });
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
