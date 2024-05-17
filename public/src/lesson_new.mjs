import { function_copy } from "./function_copy.mjs";
import { js_code_statement_call_args } from "./js_code_statement_call_args.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_code_statement_call } from "./js_code_statement_call.mjs";
import { string_replace } from "./string_replace.mjs";
import { file_transform } from "./file_transform.mjs";
import { marker } from "./marker.mjs";
import { string_combine } from "./string_combine.mjs";
import { list_add } from "./list_add.mjs";
import { js_imports_add } from "./js_imports_add.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { file_open } from "./file_open.mjs";
export async function lesson_new(name, previous) {
  const prefix = "lesson_";
  let lesson_name = string_combine(prefix, name);
  await function_copy(previous, lesson_name);
  await file_transform(
    async (before) => {
      let name = marker.name;
      const search = js_code_statement_call(name);
      let after = string_replace(
        before,
        search,
        string_combine(
          js_code_statement_call_args(list_add.name, [
            "module_current",
            lesson_name,
          ]),
          search,
        ),
      );
      let parsed = js_parse(after);
      await js_imports_add(parsed);
      return js_unparse(parsed);
    },
    file_path,
    [],
  );
  await file_open(lesson_name)
}
