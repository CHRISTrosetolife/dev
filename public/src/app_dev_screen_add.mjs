import { js_code_function_declare } from "./js_code_function_declare.mjs";
import { js_code_object_properties } from "./js_code_object_properties.mjs";
import { js_code_statement_return } from "./js_code_statement_return.mjs";
import { file_write } from "./file_write.mjs";
import { function_new_generic } from "./function_new_generic.mjs";
import { app_dev_screen_name } from "./app_dev_screen_name.mjs";
import { app_list_add } from "./app_list_add.mjs";
import { list_add } from "./list_add.mjs";
import { js_code_statement_call_args } from "./js_code_statement_call_args.mjs";
import { app_learn_code_modules } from "./app_learn_code_modules.mjs";
import { js_code_call } from "./js_code_call.mjs";
export async function app_dev_screen_add(name) {
  let screen_name = app_dev_screen_name(name);
  let parent = "parent";
  await function_new_generic(
    screen_name,
    "",
    js_code_statement_return(
      js_code_object_properties(
        ["name", "screen"],
        [name, js_code_function_declare(`${name}_screen`, parent, body_string)],
      ),
    ),
    false,
    [],
    false,
    file_write,
  );
  await app_list_add(app_learn_code_modules, function inserted_code() {
    return js_code_statement_call_args(list_add.name, [
      "result",
      js_code_call(screen_name),
    ]);
  });
}
