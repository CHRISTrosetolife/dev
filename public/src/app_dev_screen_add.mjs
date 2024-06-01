import { js_code_statement_increment } from "./js_code_statement_increment.mjs";
import { app_dev_screen_img } from "./app_dev_screen_img.mjs";
import { js_code_statement_let_assign } from "./js_code_statement_let_assign.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { function_open } from "./function_open.mjs";
import { js_code_return } from "./js_code_return.mjs";
import { app_dev_screens } from "./app_dev_screens.mjs";
import { js_code_function_declare } from "./js_code_function_declare.mjs";
import { js_code_object_properties } from "./js_code_object_properties.mjs";
import { js_code_statement_return } from "./js_code_statement_return.mjs";
import { file_write } from "./file_write.mjs";
import { function_new_generic } from "./function_new_generic.mjs";
import { app_dev_screen_name } from "./app_dev_screen_name.mjs";
import { app_list_add } from "./app_list_add.mjs";
import { list_add } from "./list_add.mjs";
import { js_code_statement_call_args } from "./js_code_statement_call_args.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { string_delimit } from "./string_delimit.mjs";
export async function app_dev_screen_add(name) {
  let screen_name = app_dev_screen_name(name);
  let root = "root";
  let image_index_name = "i";
  let screen_body = list_join_empty([
    js_code_statement_let_assign(image_index_name, 1),
    js_code_call_args(app_dev_screen_img.name, [
      screen_name,
      root,
      js_code_statement_increment(image_index_name),
    ]),
  ]);
  await function_new_generic(
    screen_name,
    "",
    js_code_return(
      js_code_object_properties(
        ["name", "screen"],
        [
          js_code_function_declare(
            `${name}_name`,
            root,
            js_code_statement_return(
              js_code_call_args(html_span_text.name, [
                root,
                string_delimit(name),
              ]),
            ),
          ),
          js_code_function_declare(`${name}_screen`, root, screen_body),
        ],
      ),
    ),
    false,
    [],
    false,
    file_write,
  );
  await app_list_add(app_dev_screens, function inserted_code() {
    return js_code_statement_call_args(list_add.name, ["result", screen_name]);
  });
  await function_open(screen_name);
}
