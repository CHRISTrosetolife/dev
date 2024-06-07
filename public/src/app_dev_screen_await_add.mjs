import { function_transform } from "./function_transform.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_delimit_backtick } from "./string_delimit_backtick.mjs";
import { app_dev_sandbox_function } from "./app_dev_sandbox_function.mjs";
import { file_write } from "./file_write.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { js_code_format } from "./js_code_format.mjs";
import { js_code_import } from "./js_code_import.mjs";
import { js_code_statement_call_args } from "./js_code_statement_call_args.mjs";
import { js_code_export_function_declare } from "./js_code_export_function_declare.mjs";
import { function_name_new } from "./function_name_new.mjs";
import { html_style_alternate_monospace_short } from "./html_style_alternate_monospace_short.mjs";
import { app_dev_p_transformer_generic } from "./app_dev_p_transformer_generic.mjs";
import { js_await_add } from "./js_await_add.mjs";
import { sleep } from "./sleep.mjs";
import { html_style_link_code } from "./html_style_link_code.mjs";
import { url_secure } from "./url_secure.mjs";
import { string_combine } from "./string_combine.mjs";
import { html_style_function_name } from "./html_style_function_name.mjs";
import { noop } from "./noop.mjs";
import { html_style_alternate_short_p } from "./html_style_alternate_short_p.mjs";
import { timeout_set } from "./timeout_set.mjs";
import { app_dev_screen_img } from "./app_dev_screen_img.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_learn_code_style_code_colored } from "./app_learn_code_style_code_colored.mjs";
export function app_dev_screen_await_add() {
  return {
    name: function await_add_name(root) {
      return html_span_text(root, "adding missing `await`s");
    },
    screen: async function await_add_screen(root) {
      let i = 1;
      let url = string_combine(
        url_secure(),
        "developer.mozilla.org/en-US/docs/Web/API/setTimeout",
      );
      html_style_alternate_short_p(
        root,
        [
          noop,
          html_style_function_name,
          noop,
          app_learn_code_style_code_colored,
          noop,
          html_style_link_code(url),
        ],
        "`" + timeout_set.name + "` is a `function` that calls `setTimeout` :",
      );
      app_dev_screen_img(app_dev_screen_await_add, root, i++);
      html_style_alternate_short_p(
        root,
        [
          noop,
          html_style_function_name,
          noop,
          app_learn_code_style_code_colored,
          noop,
          html_style_function_name,
        ],
        "`" +
          sleep.name +
          "` is a `function` that calls `" +
          timeout_set.name +
          "` :",
      );
      app_dev_screen_img(app_dev_screen_await_add, root, i++);
      html_style_alternate_short_p(
        root,
        [
          noop,
          app_learn_code_style_code_colored,
          noop,
          html_style_function_name,
          noop,
          html_style_function_name,
          noop,
          html_style_function_name,
        ],
        "if we have a `function` that calls `" +
          sleep.name +
          "` , then normally we would have to type out `await` and `async` :",
      );
      app_dev_screen_img(app_dev_screen_await_add, root, i++);
      let fn = js_await_add;
      app_dev_p_transformer_generic(root, fn, "instead , if");
      app_dev_screen_img(app_dev_screen_await_add, root, i++);
      html_style_alternate_monospace_short(
        root,
        "... then `await` will automatically be added and the `function` will be made `async` :",
      );
      app_dev_screen_img(app_dev_screen_await_add, root, i++);
      html_style_alternate_short_p(
        root,
        [
          noop,
          html_style_function_name,
          noop,
          app_learn_code_style_code_colored,
          noop,
          app_learn_code_style_code_colored,
        ],
        "if `" +
          fn.name +
          "` is automatically ran on every file save , then `await` and `async` are automatically added as you code",
      );
      let function_name_unique = await function_name_new("async_await_add");
      let contents_function = js_code_export_function_declare(
        function_name_unique,
        "",
        js_code_statement_call_args(sleep.name, [100]),
        false,
      );
      let code = string_combine(js_code_import(sleep.name), contents_function);
      let contents = await js_code_format(code);
      let file_path = function_name_to_path(function_name_unique);
      await file_write(file_path, contents);
      await app_dev_sandbox_function(
        root,
        function_name_unique,
        "adding `async` and `await`",
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
