import { lesson_new_name } from "./lesson_new_name.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { js_imports_add } from "./js_imports_add.mjs";
import { js_parse } from "./js_parse.mjs";
import { list_add } from "./list_add.mjs";
import { js_code_statement_call_args } from "./js_code_statement_call_args.mjs";
import { string_combine } from "./string_combine.mjs";
import { string_replace } from "./string_replace.mjs";
import { js_code_statement_call } from "./js_code_statement_call.mjs";
import { marker } from "./marker.mjs";
import { file_transform } from "./file_transform.mjs";
import { app_learn_code_modules } from "./app_learn_code_modules.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
export async function lesson_new_modules_add(name) {
  let list_function = app_learn_code_modules;
  let lesson_name = lesson_new_name(name);
  function inserted_code() {
    return js_code_statement_call_args(list_add.name, [
      "module_current",
      lesson_name,
    ]);
  }
  let file_path = function_name_to_path(list_function.name);
  await file_transform(
    async (before) => {
      let name = marker.name;
      const search = js_code_statement_call(name);
      let after = string_replace(
        before,
        search,
        string_combine(inserted_code(), search),
      );
      let parsed = js_parse(after);
      await js_imports_add(parsed);
      let result = js_unparse(parsed);
      return result;
    },
    file_path,
    [],
  );
}
